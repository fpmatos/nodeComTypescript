import { userError } from './../infrastructure/user-error';
import { foodItemRepository } from './../repositories/foodItem';
import { AppContext } from './../infrastructure/app-context';
import { AppServiceBase } from './service-base';
import * as validator from 'validator';

export class FoodsItemsAppService extends AppServiceBase {
    constructor(context: AppContext){
        super(context);        
    }

    async find(configSearch: {
        nearby?: Number[],
        city?: string,
        uf?: string,
        food?: string,
        foodItemId?: string
    }) {              

        if(!configSearch)        
            throw new Error("Parâmetro de consulta não informado");

        if(!configSearch.nearby || configSearch.nearby.length != 2)
            throw new userError("Coordenada de localidade não foi preenchida corretamente");

        let repository = new foodItemRepository(this.context);

        return repository.GetAllBy(configSearch);

        //{nearby: [ -23.631206,  -46.696809], uf: "SP", city: "São Paulo", foodid: "2", foodtags: ["6", "1"]}
    }

    async save(obj: any){

    }
}