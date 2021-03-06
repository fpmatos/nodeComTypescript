import { getService } from './utils';
import { checkAuthorize } from './../config/auth';
import { UsersAppService } from './../app-services/users';
import { Request } from './../infrastructure/app-request';
import TesteConnection from './../db/connections/teste-connection';
import { userError } from './../infrastructure/user-error';
import { Response, Router, NextFunction} from "express";

import * as appContext from '../infrastructure/app-context';


export let config = (router: Router) => {
    router.get('/users', checkAuthorize(), getUsers);    
}



let getUsers =  (req: Request, resp: Response, next: NextFunction) => {

    var usersAppService = getService(UsersAppService, req); 

    usersAppService.getUsers()
    .then((result) => {
        resp.send(result);
    })
    .catch(next);

    // if(req.context.getUser().userName === "fpmatos")
    //     setTimeout(() => {
    //         resp.send(req.context.getUser());
    //     }, 5000);
    // else
    //     resp.send(req.context.getUser());
}