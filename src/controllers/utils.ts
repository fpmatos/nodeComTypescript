import { UsersAppService } from './../app-services/users';
import { checkAuthorize } from './../config/auth';
import { AppServiceBase } from './../app-services/service-base';
import { AppContext } from './../infrastructure/app-context';
import {Request} from '../infrastructure/app-request';
import { Express, Router, Response, RequestHandler, NextFunction } from 'express';

export let getService = <TService extends AppServiceBase>(type: {new(context?: AppContext): TService}, req: Request) => {
    return new type(req.context);
}

export let asyncRequestMiddleware = (fn: RequestHandler) => {
    return (req: Request, resp: Response, next: NextFunction) => {
        Promise.resolve(fn(req, resp, next)).catch(next);
    }
};