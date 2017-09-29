// import { Request, NextFunction } from 'express';
// import * as express from 'express';




// import * as bodyParser from 'body-parser';

import {Schema} from "mongoose";
import * as mongoose from "mongoose";


// mongoose.connect("mongodb://localhost:27017/dbteste03", () => {

//     let departamentoSchema = new mongoose.Schema({
//         nome: String
//     });

//     let  funcionarioSchema = new mongoose.Schema({
//         nome: String,
//         departamento: {type: Schema.Types.ObjectId, ref: 'departamentos'}
//     });

// //       let model = mongoose.model("departamentos", departamentoSchema)

// //   var funcionario = new model({nome: "Financeiro"});

// //   funcionario.save();
    
//   mongoose.model("departamentos", departamentoSchema)    
//   let model = mongoose.model("Funcionarios", funcionarioSchema)


// //   var usuario = new model({nome: "Jose",departamento: "599df0debeaf6d308495818b"});

// //   usuario.save();

//     model.find({}).exec((err, doc) => {
//         console.log((<any>doc[0]).departamento);
//     });
// });



let adicionarLocalidade = (obj: any) => {
    mongoose.connect("mongodb://localhost:27017/dbteste03", () => {
        let schemaLocais = new Schema({
            name: String,
            loc: {
                type: [Number], 
                index: '2d'
            }
        });

        let model = mongoose.model("Locais", schemaLocais);

        let local1 = new model(obj);

        local1.save();
        
    
    });
};

let procurar = () => {
    mongoose.connect("mongodb://localhost:27017/dbteste03", () => {
        let schemaLocais = new Schema({
            name: String,
            loc: {
                type: [Number], 
                index: '2dsphere'
            }
        });

        let model = mongoose.model("Locais", schemaLocais);

    //     model.find({
    //         loc: {
    //             $near: [-23.6279881, -46.6992059],
    //             $maxDistance: 100
    // }           
    //     }).exec((err, docs) => {
    //         if(err)
    //             console.log(err);
    //         else
    //             console.log(docs);
    //     });    

    // model.aggregate().near({
    //     near: [-23.6363493, -46.6921425],
    //     distanceField: "dist.calculated"
    // }).exec((err, docs) => {
    //           if(err)
    //             console.log(err);
    //         else
    //             console.log(docs);      
    // });

        // model.geoNear([-23.6363493, -46.6921425], {maxDistance: 0.6 /6371, spherical: true}, function(err, docs) {
        //     console.log(docs);
        // });  

        model.geoNear({type: "Point", coordinates: [-23.632329, -46.696978]}, {spherical: true}, function(err, docs) {
            console.log(docs);
        });          
    });
};

// adicionarLocalidade({
//             name: "av fleming",
//             loc: [-19.8682685, -43.9855261]
//         });

procurar();




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

// let a = async () => {
//     console.log('a');
//     throw new Error("erro 1");
// }

// let b = async () => {
//     console.log('b');
//     //throw new Error("erro 2");
// }

// let c = async () => {
//     try
//     {
//         await a();
//     }
//     catch(err)
//     {
//         console.log(err)       
//     }
// }

// c();


