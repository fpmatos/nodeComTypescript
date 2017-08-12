import { checkAuthorize } from './auth';
import * as express from 'express';
import * as usersController from '../controllers/users';
import * as userContext from '../common/user-context';

export let config = (app: express.Express) => {    

    console.log(`start routes config ...`);

    let apiRouter = express.Router();

    app.use("/api", apiRouter);

    configApiUsers(apiRouter);

    console.log(`end routes config ...`);
}

let configApiUsers = (router: express.Router) => {
    router.get('/users', checkAuthorize(), usersController.getUsers);    
}