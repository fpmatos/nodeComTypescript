import * as mongoose from "mongoose";

export module db {
    export class ConnectionBase {

        private instanceConnection: mongoose.Connection;
        connectionString: string;

        constructor(connectionString: string){
            this.connectionString = connectionString;
        }

        createAndOpenConnection() : Promise<ConnectionBase> {
            return new Promise((resolve, reject) => {
                
                let connection = mongoose.createConnection();

                console.log(`connect in database ${this.connectionString} ...`);

                connection.open(this.connectionString, null, null, null, (error) => {
                    console.log('111');
                    if(error)
                    {
                        console.log(`error when try connect in database ${this.connectionString}. Error:`, error);
                        reject(error);
                    }
                });

                this.instanceConnection = connection;
                resolve(this); 
            });
        }

        getInstanceConnection(): mongoose.Connection {
            return this.instanceConnection;
        }
    }
}

export default db.ConnectionBase;