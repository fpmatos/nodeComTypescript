import { userError } from './../common/user-error';
import { Router, Express, Response, Request } from 'express';

export let errorHandlerConfig = (app: Express) => {
    app.use((err: Error, req: any, res: Response, next: any) => {

        if(!req.route)
        {
            res.statusMessage = "recurso não foi encontrado.";
            res.status(404).end();
        }
        else if(err instanceof userError)
        {
            res.statusMessage = err.message;
            res.status(406).end();            
        }
        else
        {
            res.statusMessage = "erro interno.";
            res.status(500).end();
        }
    });
}

export let requestRouteConfig = (app: Express) => {
    app.use((req, res, next) => {

        preRequestRouteConfig(req, res);

        res.on('finish', () => {
            afterRequestRouteConfig(req, res);
        });

        next(null);
    });
}

export let RouteNotFoundConfig = (app: Express) => {
    app.use((req, res) => {

        if(req.route === undefined)
            res.status(404).send("recurso não foi encontrado.");
        }
    );
};

let preRequestRouteConfig = (req: Request, res: Response) => {


}

let afterRequestRouteConfig = (req: Request, res: Response) => {

}