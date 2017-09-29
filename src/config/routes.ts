import { Logger } from './../infrastructure/logger';
import * as usersController from './../controllers/users';
import * as foodsController from './../controllers/foods';
import * as foodItemsController from './../controllers/foodItems';
import { checkAuthorize } from './auth';
import * as express from 'express';



export let config = async (app: express.Express) => {    

    Logger.info("start routes config ....");

    try
    {    
        let apiRouter = express.Router();

        app.use("/api", apiRouter);
        
        usersController.config(apiRouter);
        foodsController.config(apiRouter);
        foodItemsController.config(apiRouter);

        Logger.info(`end routes config ...`);
    }
    catch(ex){
        Logger.info(`errors in routes config ...`);
        throw ex;
    }
}