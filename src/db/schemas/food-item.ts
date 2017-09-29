import { Schema, MongooseThenable, Model, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export const foodItemSchema: Schema = new mongoose.Schema({
    nm: String,
    fd: { type: String, ref: 'foods' },
    est: { type: String, ref: 'establishments' }
});


