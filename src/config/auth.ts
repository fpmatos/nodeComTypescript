import { Logger } from './../infrastructure/logger';
import { Express, Response, NextFunction, RequestHandler } from 'express';
import {Request} from '../infrastructure/app-request'
import * as jwt from 'jwt-simple';
import * as passports from './passports';
import * as passport from "passport";

export let checkAuthorize = (...roles: string[]): RequestHandler => {    

    let fnCheckAuthRequest: RequestHandler = (req: Request, res, next) => {

        if(!req.context.getUser()) res.sendStatus(401); 
        else next(null);
    }

    return fnCheckAuthRequest;
};

export let config = (app: Express) => {

    Logger.info(`start auth config ...`);

    passports.config(app)

    app.post('/token', postToken); 

    app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email', 'user_friends', 'manage_pages'],  }));

    app.get('/auth/google', passport.authenticate('google', { scope : ['email', 'profile'],  }));    

    app.get('/auth/facebook/callback', getFacebookCallback);

    app.get('/auth/google/callback', getGoogleCallback);

    app.use((req: Request, res, next) =>{

        authRequest(req)
        .then(() => {
            next(null);
        })
        .catch(() => {
            res.status(401).send("invalid token.");
        });
    });
    
    Logger.info(`end auth config ...`);
}

let getFacebookCallback = (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('facebook', (err: Error, user: any, next: any) => {           
            
            res.send("dsffdsf");

        })(req, res, next);
};

let getGoogleCallback = (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('google', (err: Error, user: any, next: any) => {           
            
            res.send(err);

        })(req, res, next);
};

let postToken = (req: Request, res: Response, next: NextFunction) => {        
        passport.authenticate('local', (err: Error, user: any, info: any) => {

            if(err) res.send(err);

            req.logIn(user, (err) => {
                if(err) next(err);

                generateTokenAndSend(user, res);
            });
        })(req, res, next);
    };

let authRequest = async (req: Request) => {
    let authParamValue: string = req.header("Authorization");

    if(!authParamValue) return;
        
    let token = authParamValue.replace("Bearer ", "");    

    let tokenDecoded = jwt.decode(token, "_securityInfo");

    req.context.setUser({userName: tokenDecoded.sub});
};

let generateTokenAndSend = (user: any, res: Response) => {
    let tokenDecoded = {
        sub: user.userName
    };    

    let token = jwt.encode(tokenDecoded, "_securityInfo");

    res.json({
        user, 
        token: token
    });    
};

