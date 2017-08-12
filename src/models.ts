import { Model, Document } from 'mongoose';
import * as userSchema from './db/schemas/user';
import * as dbContext from './common/db-context';

export let User: Model<Document>;
export let Teste: Model<Document>;

export let config = () => {

    dbContext.event.on("connectionAdded", (args) => {

        let key = args;

        let connection = dbContext.get(key).getInstanceConnection();
        console.log(`start config models of connection ${key}  ...`);

        switch(key)
        {
            case "default":
                User = connection.model("Users", userSchema.schema);
                break;
            case "teste":
                Teste = connection.model("Testes", userSchema.schema);
                break;
        }

        console.log(`end config models of connection ${key}  ...`);
    });
    
};

