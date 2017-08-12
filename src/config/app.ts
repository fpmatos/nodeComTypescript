import * as configRoutes from './routes';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

import * as environment from './environment'
import * as filtersConfig from './filters'
import * as appContext from '../common/app-context';
import * as auth from './auth';
import * as dbConfig from './db';

let app = express();

export let config = (): express.Express => {    
    console.log(`start app config ...`);

    console.log(1);

    environment.config();
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    appContext.config(app);

    dbConfig.config();

    // var connection1 = mongoose.createConnection();
    // var connection2 = mongoose.createConnection();
    

    // connection1.open(process.env.defaultDbConnection, "null", null, null, (error) => { console.log("Erro ao conectar", error) });
    // connection2.open(process.env.defaultDbConnection2, null, null, null, (error) => { console.log("Erro ao conectar", error) });
    // // var connection = mongoose.connect(process.env.defaultDbConnection, (erro) => {
    // //     console.log("mongo error: ",erro);
    // // })

    // // connections.add("default", connection);

    // let x = connections.get("default");

    // var clienteSchema = new mongoose.Schema({
    //     nome: {
    //         first: String,
    //         last: String
    //     },
    //     criadoEm: {type: Date, default: Date.now},
    //     Ativo: {type: Boolean, default: true}
    // });

    // var model1 = connection1.model('Clientes', clienteSchema);
    // var model2 = connection2.model('Clientes', clienteSchema);

    // let doc1 = new model1({nome: "Teste333"});
    // let doc2 = new model2({nome: "Teste333"});

    // doc1.save();
    // doc2.save();


    auth.config(app);
    filtersConfig.requestRouteConfig(app);    
    
    configRoutes.config(app);    

    filtersConfig.RouteNotFoundConfig(app);

    filtersConfig.errorHandlerConfig(app);

    console.log(`end app config ...`);

    return app;
};