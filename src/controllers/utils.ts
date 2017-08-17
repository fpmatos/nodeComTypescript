import { UsersAppService } from './../app-services/users';
import { checkAuthorize } from './../config/auth';
import { AppServiceBase } from './../app-services/service-base';
import { AppContext } from './../common/app-context';
import {Request} from '../common/app-request';
import {Express, Router, Response} from 'express';

export let getService = <TService extends AppServiceBase>(type: {new(context?: AppContext): TService}, req: Request) => {
    return new type(req.context);
}