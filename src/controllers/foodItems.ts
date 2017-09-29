import { FoodsItemsAppService } from './../app-services/foodItems';
import { getService, asyncRequestMiddleware } from './utils';
import { Router, NextFunction, Response } from 'express';
import { Request } from './../infrastructure/app-request';

export let config = (router: Router) => {
    router.get('/foodItems', asyncRequestMiddleware(getFoodItems));    
}

let getFoodItems =  async (req: Request, resp: Response, next: NextFunction) => {

    var service = getService(FoodsItemsAppService, req); 

    let result = await service.find({nearby: [ -23.631206,  -46.696809]});
    
    resp.send(result);


    // if(req.context.getUser().userName === "fpmatos")
    //     setTimeout(() => {
    //         resp.send(req.context.getUser());
    //     }, 5000);
    // else
    //     resp.send(req.context.getUser());
}