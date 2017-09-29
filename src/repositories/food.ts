import { AppContext } from './../infrastructure/app-context';

import { DocumentQuery } from "mongoose";
import { Food } from "../domain/types";
import { RepositoryBase } from "../infrastructure/repositories/base";

export class FoodRepository extends RepositoryBase<Food> {
    constructor(context: AppContext){
        super(context);
        this.dbSet = this.dbModels.Food;
    }

    getAll() : DocumentQuery<Food[], Food> {
        let query = super.getAll();

        query = query.populate("tgs");

        return query;
    }

}