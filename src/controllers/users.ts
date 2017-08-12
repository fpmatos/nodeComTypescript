import TesteConnection from './../db/connections/teste-connection';
import { userError } from './../common/user-error';
import {Request, Response} from "express";
import * as userContext from '../common/user-context';
import {User, Teste} from '../models';
import * as dbContext from '../common/db-context';
import * as appContext from '../common/app-context';
//import * as defaultConn from '../db/connections/default';

//import * as userContext from '../services/userContext';

export let getUsers = (req: Request, resp: Response) => {

    var testeConnection = new TesteConnection();   

    testeConnection.createAndOpenConnection().then(() =>{        
        dbContext.add("teste", testeConnection, appContext.ScopeType.requestLifeCicle);

        var y = new Teste({nome: "Jose", telefone: "88888888"});

        console.log("Model Teste", y);

         y.save();
    });

    try
    {   // User.create({nome: "Jose", telefone: "51515151"});
        var x = new User({nome: "Gatinho Safado", telefone: "9999999"}); 
        
        x.save();
       
    }
    catch(ex)
    {
        console.log("Erro",ex)
    }
    // x.save((err) => {
    //     console.log(err);
    // })
    //console.log(defaultConn.x);
    // console.log(9);
    //  let x = new models.User({nome: "Fernando", telefone: "11111111 11"});

    //  x.save((err) => {
    //      console.log(err);
    //  })
    
    resp.json({nome: userContext.get()});
    //console.log('userContext.value.userName'); 
    // throw new userError("erro ao recuperar usuarios");
}