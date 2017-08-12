import ConnectionBase from './connection-base';

export module db{
    export class TesteConnection extends ConnectionBase{
        constructor(){
            super(process.env.defaultDbConnection2);
        }
    }
}

export default db.TesteConnection;