import ConnectionBase from './connection-base';

export module db{
    export class DefaultConnection extends ConnectionBase{
        constructor(){
            super(process.env.defaultDbConnection);
        }
    }
}

export default db.DefaultConnection;