import { Schema, MongooseThenable, Model, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export const establishmentSchema: Schema = new mongoose.Schema({
    _id: String,
    nm: String,
    ct: String,
    adr: String,
    uf: String,
    lc: {
        type: [Number], 
        index: '2dsphere'
    }       
});