import { Express } from 'express';

let instanceList: InstanceItem[] = [];

export let config = (app: Express) => {

    process.on('exit', () =>{ removeAll() } );
    process.on('uncaughtException', () =>{ removeAll() } );

    app.use((req, res, next) => {
        res.on('finish', () => {
            removeAll(ScopeType.requestLifeCicle);
        });

        next(null);
    });
}

export let add = (key: string, instance: any, scopeType: ScopeType = ScopeType.staticLifeCicle, recicle?: (instanceValue: any) => Promise<any>) => {    
    let index = getIndexByKey(key);
    if(index < 0)
        instanceList.push({key: key, value: instance, scopeType: scopeType, recicle: recicle});
}

export let remove = (key: string) =>{

    console.log(`Removing ${key} of app context`)

    let index = getIndexByKey(key);

    if(index > -1)
    {
        if(instanceList[index].recicle)
            instanceList[index].recicle(instanceList[index].value);

        delete instanceList[index]; 
    }
}

export let get = (key: string): any => {
    let result = instanceList.find(item => item.key === key);
    return result ? result.value : null;
}

export enum ScopeType{
    staticLifeCicle,
    requestLifeCicle
};

let removeAll = (scopeType?: ScopeType) => {

    console.log(`Removing all scope ${ScopeType[scopeType]} of app context`)    

    for(let item of instanceList){

        if(scopeType && item.scopeType != scopeType)
            continue;

        remove(item.key);     
    }

    instanceList = instanceList.filter(_item => _item != undefined); 
};

let getIndexByKey = (key: string): number => {
    let result = instanceList.findIndex(item => item != undefined && item.key === key);
    return result;
}

type InstanceItem = {
    key: string,
    value: any;
    scopeType: ScopeType;
    recicle?: (instanceValue: any) => Promise<any>;
};
