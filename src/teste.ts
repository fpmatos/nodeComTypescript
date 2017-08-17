// import { Request, NextFunction } from 'express';
// import * as express from 'express';
// import * as bodyParser from 'body-parser';









// let app = express();

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());


// let _req: Request = null;


// app.use((req, res, next) => {
    
//     _req = req;

//     if(_req.query.nome === "Fernando")
//     {
//         setTimeout(() => {
//             next();
//         }, 5000);          
//     }
//     else
//         next();

    

//     // console.log(req.query.nome);

//     // (<any>req).lista = [];
//     // (<any>req).lista.push(req.query.nome);

//     // lista = (<any>req).lista;

//     // setTimeout(() => {
//     //     console.log(req.query.nome, lista);
//     //     next();
//     // }, 5000);    
    
// })

// app.get("/", (req, res) => {

//     res.send(_req.query.nome);
// });


// app.listen(3000, () => {

// })

// // import * as mongoose from "mongoose";
// // import * as userSchema from './db/schemas/user';

// // process.on('uncaughtException', (error) => { 
// //     console.log('erro crítico ocorreu: ', error);
// // });        


// // let listen = (connection: mongoose.Connection) => {
// //     let db = connection.db;


// //     connection.on('connecting', function() {
// //         console.log('connecting to MongoDB...');
// //     });

// //     connection.on('error', function(error) {
// //         console.error('EERROOOOOOOOOOO ' + error);
// //         //-- mongoose.disconnect();
// //     });

// //     connection.on('connected', function() {
// //         console.log('MongoDB connected!');
// //     });
// //     db.once('open', function() {
// //         console.log('MongoDB connection opened!');
// //     });
// //     connection.on('reconnected', function () {
// //         console.log('MongoDB reconnected!');
// //     });
// //     connection.on('disconnected', function() {
// //         console.log('MongoDB disconnected!');
// //         //-- mongoose.connect(;
// //     });   
// // };

// // let connection = mongoose.connect("mongodb://localhost:27017/dbTest01", { useMongoClient: true, server:{ auto_reconnect: true, socketOptions: { keepAlive: 300000, poolSize: 20 } }}, () => {
// // listen(connection.connection);
// // });



// // let User = connection.model("Users", userSchema.schema);

// // let print = () => {
// //     console.log('tentando ...');
// //     User.find({nome: 'Fernando'}, "-telefone", (err, docs) => {
// //         if(err)
// //             console.log(err.message);
// //         else
// //             console.log(docs);
// //     });
// // }

// // setInterval(() => {
// //     print();
// // }, 40000);
// // // import * as mongoose from 'mongoose';
// // // let schema = mongoose.Schema;

// // // console.log(1);

// // // mongoose.connect("mongodb://localhost:27017/test2");

// // // mongoose.connection.on("error", () => {
// // //     console.log("MongoDB connection error. Please make sure MongoDB is running.");
// // //     process.exit();
// // // }); 

// // // var clienteSchema = new schema({
// // //     nome: {
// // //         first: String,
// // //         last: String
// // //     },
// // //     criadoEm: {type: Date, default: Date.now},
// // //     Ativo: {type: Boolean, default: true}
// // // });

// // // var model = mongoose.model('Clientes', clienteSchema);

// // // model.count({}, (err, count) => {
// // // console.log("total: ", count);
// // // });

// // // var cliente1 = new model({ nome: {first: "Fernando", last: "Matos"}});

// // // cliente1.save();

let a = async () => {
    console.log('a');
    throw new Error("erro 1");
}

let b = async () => {
    console.log('b');
    //throw new Error("erro 2");
}

let c = async () => {
    try
    {
        await a();
    }
    catch(err)
    {
        console.log(err)       
    }
}

c();


