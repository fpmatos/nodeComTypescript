import { userError } from '../user-error';
import { Models } from '../../db/models';
import { Document, Model, ValidationError, DocumentQuery } from 'mongoose';
import { AppContext } from '../app-context';

export abstract class RepositoryBase<T extends Document>{

    protected dbSet: Model<T>;

    protected dbModels: Models;

    constructor(context: AppContext) {
        
        this.dbModels = new Models(context);
    }

    getById(id: string){
        return new Promise((resolve, reject) => {
            this.dbSet.findById(id, (err, document) => {
                if(err)
                    reject(err);
                else
                    resolve(document);
            });            
        });
    }

    delete(...ids: string[]){

    }

    update(model: any){

    }

    getAll() : DocumentQuery<T[],T> {
        let query = this.dbSet.find({});
        return query;
    }

    async insert(model: any) {        

        try
        {
            let newObject = new this.dbSet(model);
            newObject = await newObject.save();
            return newObject;
        }
        catch(error)
        {            
            this.mapAndThrowError(error);
        }
    }

    mapAndThrowError(error: Error)    {
        if(error.name !== "ValidationError")
            throw error;
        else
        {
            let messages = this.getValidationMessages(error);
            throw new userError(messages);
        }
    }

    getValidationMessages(error: any): string[]{
        let nessages: string[] = [];

        for(let item in error.errors)
        {
            nessages.push(error.errors[item].message);
        }

        return nessages;
    }
}