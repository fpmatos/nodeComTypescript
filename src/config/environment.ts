import { Logger } from './../common/logger';
var envVariables = require('../env.json');

export let  config = async () => {

    Logger.info(`start environment config ...`);

    var node_env = process.env.NODE_ENV || 'development';
    var variablesObject = envVariables[node_env];

    for (const key of Object.keys(variablesObject)){
        process.env[key] = variablesObject[key];
    }

    Logger.info(`end environment config ...`);

    return variablesObject;
};
