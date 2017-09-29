import { UserRepository } from './../repositories/user';
import { AppContext } from './../infrastructure/app-context';
import { AppServiceBase } from './service-base';

export class UsersAppService extends AppServiceBase {
    constructor(context: AppContext){
        super(context);        
    }

    async getUsers() {              
        let repository = new UserRepository(this.context);
        return repository.insert({ telefone: "33333333", nome: "Fernando", endereco: "rua niltom baldo"});
    }

    async save(obj: any){

    }
}