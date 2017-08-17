import { getService } from './utils';
import { checkAuthorize } from './../config/auth';
import { UsersAppService } from './../app-services/users';
import { Request } from './../common/app-request';
import TesteConnection from './../db/connections/teste-connection';
import { userError } from './../common/user-error';
import { Response, Router} from "express";

import * as appContext from '../common/app-context';


export let config = (router: Router) => {
    router.get('/users', checkAuthorize(), getUsers);    
}

let getUsers = (req: Request, resp: Response) => {

    var usersAppService = getService(UsersAppService, req); 


    if(req.context.getUser().userName === "fpmatos")
        setTimeout(() => {
            resp.send(req.context.getUser());
        }, 5000);
    else
        resp.send(req.context.getUser());
}