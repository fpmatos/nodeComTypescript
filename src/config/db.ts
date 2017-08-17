import { userError } from './../common/user-error';
import DefaultConnection from './../db/connections/default-connection';
import ConnectionBase from './../db/connections/connection-base';

import { Request } from './../common/app-request';
import { AppContext } from './../common/app-context';

export let dbContext = () => {
    return (req: Request, res: any, next: any) => {

        let defaultConnection = new DefaultConnection();

        Promise.all([
            defaultConnection.createAndOpenConnection()
            ])
            .then((items) => {

                req.context.set("defaultConnection", items[0], recicleDb)

                next();
            }).catch((err) =>{
                next(err);
            });        
    };    
}

let recicleDb = async (db: ConnectionBase) => {
    await db.getInstanceConnection().close();
}