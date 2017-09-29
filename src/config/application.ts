import { config } from './passports';
import * as dbConfig from './db';
import * as appContext from './../infrastructure/app-context';
import * as configRoutes from './routes';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import * as Injector from './injector';
import * as environment from './environment'
import * as filtersConfig from './filters'
import * as authConfig from './auth';
import { Logger } from './../infrastructure/logger';

let app = express();

export class Application {

    static async config() {        
       
        await Injector.config();

        await Logger.config();

        Logger.info("start app config ....");

        Application.onError()

        await environment.config();
        
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());         
        app.use(appContext.contextCicle());      
        app.use(dbConfig.dbContext());    

        authConfig.config(app);

        configRoutes.config(app); 

        app.use(filtersConfig.routeNotFound());
        app.use(filtersConfig.errorHandler());

        Logger.info(`end app config ...`);

        return app;    
    }

    static onError() {
        process.on('uncaughtException', (error) => { 
            Logger.error(`error app config:`, error);
        });   
    }
}