import * as mongoose from 'mongoose';
import * as appContext from './app-context';
import ConnectionBase from '../db/connections/connection-base';
import { EventEmitter } from "events";

export const event = new EventEmitter();

export let add = (key: string, value: ConnectionBase, scopeType: appContext.ScopeType = appContext.ScopeType.staticLifeCicle) => {
    appContext.add(key, value, scopeType, async (instance) => {
        let connection = <ConnectionBase>instance;
        console.log(`closing conection ${connection.connectionString} ...`);
        connection.getInstanceConnection().close();
        console.log(`connection ${connection.connectionString} closed ...`);
    });

    event.emit("connectionAdded",  key);
};

export let get = (key: string): ConnectionBase => {
    return <ConnectionBase>appContext.get(key);
};

export let remove = (key: string) => {
    appContext.remove(key);
    event.emit("connectionRemoved",  key);
};