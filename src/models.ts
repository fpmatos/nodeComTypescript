import DefaultConnection from './db/connections/default-connection';
import { Model, Document } from 'mongoose';
import * as userSchema from './db/schemas/user';
import { AppContext } from './common/app-context';

export class Models {

    User: Model<Document>;

    constructor(context: AppContext) {

        let defaultConnection = <DefaultConnection>context.get("defaultConnection");

        this.User = defaultConnection.getInstanceConnection().model("Users", userSchema.schema);
    }
}

