import { Schema, MongooseThenable, Model, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export const schema: Schema = new mongoose.Schema({
    nome: String,
    telefone: String
});

export default schema;

