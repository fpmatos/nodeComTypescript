import { Schema, MongooseThenable, Model, Document } from 'mongoose';
import * as mongoose from 'mongoose';

export const foodSchema: Schema = new mongoose.Schema({
    _id: String,
    nm: String,
    tgs: [{ type: String, ref: 'FoodTags' }], 
    img: {data: Buffer, contentType: String }
});