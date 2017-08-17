import { Logger } from './../../common/logger';
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
                let connection = mongoose.createConnection(this.connectionString, { server:{ auto_reconnect: true, socketOptions: { keepAlive: 1, poolSize: 20 } }});

                this.instanceConnection = connection;   
                
                let db = connection.db;

                connection.on('connecting', () => {
                    Logger.info(`connecting to MongoDB ${this.connectionString}`);
                });

                connection.on('error', (error) => {
                    Logger.warn(`Mongo DB ${this.connectionString} Error!`);
                    reject(error);
                    //-- mongoose.disconnect();
                });

                connection.on('connected', () => {
                    Logger.info(`connected to MongoDB ${this.connectionString}`);
                    resolve(this);
                });

                db.once('open', () => {
                    Logger.info(`MongoDB ${this.connectionString} opened!`);
                });

                connection.on('reconnected', () => {
                    Logger.info(`MongoDB ${this.connectionString} reconnected!`);
                });
                
                connection.on('disconnected', () => {
                    Logger.info(`MongoDB ${this.connectionString} disconnected!`);
                });                
            });
        }

        getInstanceConnection(): mongoose.Connection {
            return this.instanceConnection;
        }
    }
}

export default db.ConnectionBase;