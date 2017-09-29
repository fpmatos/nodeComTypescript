import { userError } from './../infrastructure/user-error';
import DefaultConnection from './../db/connections/default-connection';
import ConnectionBase from './../db/connections/connection-base';

import { Request } from './../infrastructure/app-request';
import { AppContext } from './../infrastructure/app-context';
import * as dbSeeder from '../db/seeder';


export let dbContext = () => {
    return (req: Request, res: any, next: any) => {

        let defaultConnection = new DefaultConnection();

        Promise.all([
            defaultConnection.createAndOpenConnection()
            ])
            .then((items) => {

                req.context.set("defaultConnection", items[0], recicleDb)

                dbSeeder.init(req.context).then(() => {
                    next();
                }).catch(next);
                
            }).catch(next);        
    };    
}

let recicleDb = async (db: ConnectionBase) => {
    await db.getInstanceConnection().close();
}