// import { Express } from 'express';
import * as winston from 'winston';

export type ContextItem = {
    key: string,
    value: any;
    recicle: (value: any) => Promise<any>;
}

export type UserContextModel = {
    userName: string    
}

export let contextCicle = () => {

    return (req: any, res: any, next: any) => {

        req.context = new AppContext();

        res.on('finish', () => {
            for(let item of (<AppContext>req.context).itens)
                if(item.recicle)
                    item.recicle(item.value);
        });

        next();
    };
}

export class AppContext {

    itens: ContextItem[] = [];


    get(key: string): any {
        let result = this.itens.find(item => item.key === key);
        return result ? result.value : null;
    }

    set(key: string, value: any, recicle?: (instanceValue: any) => Promise<any>){
        let item: ContextItem = {key: key, value: value, recicle: recicle};
        this.itens.push(item);
    }

    getUser() {
        return this.get("user");
    }   

    setUser(value: UserContextModel) {
        this.set("user", value);
    }
}



// let instanceList: InstanceItem[] = [];

// export let config = (app: Express) => {

//     process.on('exit', () => { 
//         console.log('process exit');        
//         removeAll() 
//     } );

//     app.use((req, res, next) => {
//         res.on('finish', () => {
//             removeAll(ScopeType.requestLifeCicle);
//         });

//         next(null);
//     });
// }

// export let add = (key: string, instance: any, scopeType: ScopeType = ScopeType.staticLifeCicle, recicle?: (instanceValue: any) => Promise<any>) => {    
//     let index = getIndexByKey(key);
//     if(index < 0)
//         instanceList.push({key: key, value: instance, scopeType: scopeType, recicle: recicle});
// }

// export let remove = (key: string) =>{

//     console.log(`Removing ${key} of app context`)

//     let index = getIndexByKey(key);

//     if(index > -1)
//     {
//         if(instanceList[index].recicle)
//             instanceList[index].recicle(instanceList[index].value);

//         delete instanceList[index]; 
//     }
// }

// export let get = (key: string): any => {
//     let result = instanceList.find(item => item.key === key);
//     return result ? result.value : null;
// }

// export enum ScopeType{
//     staticLifeCicle,
//     requestLifeCicle
// };

// let removeAll = (scopeType?: ScopeType) => {

//     console.log(`Removing all scope ${ scopeType ? "scopeType " + ScopeType[scopeType] : ""} of app context`)    

//     for(let item of instanceList){

//         if(scopeType && item.scopeType != scopeType)
//             continue;

//         remove(item.key);     
//     }

//     instanceList = instanceList.filter(_item => _item != undefined); 
// };

// let getIndexByKey = (key: string): number => {
//     let result = instanceList.findIndex(item => item != undefined && item.key === key);
//     return result;
// }

// type InstanceItem = {
//     key: string,
//     value: any;
//     scopeType: ScopeType;
//     recicle?: (instanceValue: any) => Promise<any>;
// };
