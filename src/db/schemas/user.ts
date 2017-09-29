import { Schema, MongooseThenable, Model, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export const userSchema: Schema = new mongoose.Schema({
    nome: {type: String, required: [true, "nome requerido."]},
    telefone: String,
    endereco: {type: String, required: [true, "Endereço obrigatório"]}
});