import { FoodRepository } from './../repositories/food';
import { AppContext } from './../infrastructure/app-context';
import { AppServiceBase } from './service-base';

export class FoodsAppService extends AppServiceBase {
    constructor(context: AppContext){
        super(context);        
    }

    async getFoods() {              
        let repository = new FoodRepository(this.context);

        return repository.getAll();
    }

    async save(obj: any){

    }
}