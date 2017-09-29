import { Document } from 'mongoose';
import { AppContext } from './../infrastructure/app-context';
import { RepositoryBase } from "../infrastructure/repositories/base";

export class UserRepository extends RepositoryBase<Document> {
    constructor(context: AppContext){
        super(context);
        this.dbSet = this.dbModels.User;
    }
}