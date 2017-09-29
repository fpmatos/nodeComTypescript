import {Schema} from "mongoose";
import * as mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/dbteste04", () => {
    let schemaCliente = new Schema({
        name: {type: String, required: [true, 'coloca o nome porra!']},
        idade: {dataAniversario: Date}
    });

    let model = mongoose.model("clientes", schemaCliente);

    let local1 = new model({
        name: 'Fernando',
        idade: '2017-10-10'
    });

    local1.save((error) => {
        console.log(error);
    });
    

});