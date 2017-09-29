import { Logger } from './../infrastructure/logger';
import { userError } from './../infrastructure/user-error';
import { Router, Express, Response, Request } from 'express';

export let errorHandler = () => {
    return (err: Error, req: any, res: Response, next: any) => {

        if(err instanceof userError)
        {
            res.statusMessage = err.message;
            res.status(406).send((<userError>err).messages);        
        }        
        else
        {
            res.statusMessage = "erro interno.";
            Logger.error("Erro crítico ocorreu: ", err);
            res.status(500).end();
        }
    };
}

export let routeNotFound = () => {
    return (req: any, res: Response) => {

        if(req.route === undefined)
            res.status(404).send("recurso não foi encontrado.");
    }
};

