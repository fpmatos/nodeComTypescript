import { Document } from 'mongoose';

export interface FoodTag extends Document {
    _id: String;
    nm: String;
}

export interface Food extends Document  {
    _id: string,
    nm: string,
    tgs: any[]
};

export interface Establishment extends Document{
    _id: String;
    nm: String;
    ct: string;
    adr: String;
    uf: String;
    lc: Number[];
}

export interface FoodItem extends Document {
    _id: String;
    fd: Food;
    est: Establishment;
    nm: String;
    distance: Number;
}