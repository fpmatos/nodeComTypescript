import { FoodItem } from './../domain/types';
import { Food } from '../domain/types';
import { establishmentSchema } from './schemas/establishment';
import { foodTagSchema } from './schemas/food-tag';
import { foodSchema } from './schemas/food';
import { foodItemSchema } from './schemas/food-item';
import DefaultConnection from './connections/default-connection';
import { Model, Document } from 'mongoose';
import {userSchema} from './schemas/user';
import { AppContext } from '../infrastructure/app-context';

export class Models {

    User: Model<Document>; 
    FoodTag: Model<Document>;   
    Food: Model<Food>;   
    FoodItem: Model<FoodItem>;
    Establishment: Model<Document>;

    constructor(context: AppContext) { 

        let defaultConnection = <DefaultConnection>context.get("defaultConnection");

        this.User = defaultConnection.getInstanceConnection().model("Users", userSchema);
        this.FoodTag = defaultConnection.getInstanceConnection().model("FoodTags", foodTagSchema);
        this.Food = defaultConnection.getInstanceConnection().model<Food>("Foods", foodSchema);
        this.Establishment = defaultConnection.getInstanceConnection().model("Establishments", establishmentSchema);
        this.FoodItem = defaultConnection.getInstanceConnection().model<FoodItem>("FoodItems", foodItemSchema);
    }
}

