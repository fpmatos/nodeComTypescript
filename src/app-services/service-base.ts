//import { Models } from './../models';
import { AppContext } from './../infrastructure/app-context';
export class AppServiceBase{
    constructor(protected context: AppContext = null){
        //this.Models = new Models(context);
    }

    //Models: Models;
}