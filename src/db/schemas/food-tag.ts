import { Schema, MongooseThenable, Model, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export const foodTagSchema: Schema = new mongoose.Schema({
    _id: String,
    nm: String,
    tg: String
});


