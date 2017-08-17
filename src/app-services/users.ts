import { AppContext } from './../common/app-context';
import { AppServiceBase } from './service-base';

export class UsersAppService extends AppServiceBase {
    constructor(context: AppContext){
        super(context);        
    }

    getUsers(): Promise<any> {              
        return new Promise((resolve, reject) => {
            this.Models.User.find({}, (err, doc) => {
                
                if(err)
                    reject(err);

                resolve(doc);
            });
        });
    }
}