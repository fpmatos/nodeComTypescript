import { Logger } from './../common/logger';
import * as usersController from './../controllers/users';
import { checkAuthorize } from './auth';
import * as express from 'express';



export let config = async (app: express.Express) => {    

    Logger.info("start routes config ....");

    try
    {    
        let apiRouter = express.Router();

        app.use("/api", apiRouter);
        
        usersController.config(apiRouter);

        Logger.info(`end routes config ...`);
    }
    catch(ex){
        Logger.info(`errors in routes config ...`);
        throw ex;
    }
}

// let configApiUsers = (router: express.Router) => {
//     router.get('/users', checkAuthorize(), usersController.getUsers);    
// }