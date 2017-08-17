import { Express } from 'express';
import * as passport from 'passport';
import * as passportLocal from 'passport-local';
import * as passportFacebook from 'passport-facebook';
import * as passportGoogle from 'passport-google-oauth';

export let config = (app: Express): passport.Passport  => {

    app.use(passport.initialize());

    passport.serializeUser((user: any, done) => {
        done(null, user.userName);
    });

    configLocal(app);
    configFacebook(app);
    configGoogle(app);

    return passport;
}

export let configLocal = (app: Express) => {
    let localStrategy = passportLocal.Strategy;

    let strategy = new localStrategy({
        usernameField: 'userName'
    }, (userName, password, done) => {
        if(userName === "fpmatos")
            return done(null, {userName: "fpmatos", name: "Fernando Matos"});
        else if(userName === "user1")
            return done(null, {userName: "user1", name: "Usuario Otario"});            
        else
            return done("Dados para autenticação inválidos", false, null)
    });    

    passport.use(strategy);    
};

export let configFacebook = (app: Express) => {
    let facebookStrategy = passportFacebook.Strategy;

    let strategy = new facebookStrategy({
         clientID: process.env.facebookCliendId,
         clientSecret: process.env.facebookClientSecret,
         callbackURL: process.env.facebookCallbackUrl,
         profileFields: ['id', 'displayName', 'photos', 'email']
    }, (token, refreshToken, profile, done) => {
        return done(null, profile);
    });

    passport.use(strategy);    
};

export let configGoogle = (app: Express) => {
    let googleStrategy = passportGoogle.OAuth2Strategy;

    let strategy = new googleStrategy({
         clientID: process.env.googleCliendId,
         clientSecret: process.env.googleClientSecret,
         callbackURL: process.env.googleCallbackUrl,
    }, (token, refreshToken, profile, done) => {
        console.log("token", token, "profile:", profile);
        return done(null, profile);
    });

    passport.use(strategy);    
};