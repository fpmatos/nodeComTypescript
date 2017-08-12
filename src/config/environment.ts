var envVariables = require('../env.json');

export let  config = () => {

    console.log(`start environment config ...`);

    var node_env = process.env.NODE_ENV || 'development';
    var variablesObject = envVariables[node_env];

    for (const key of Object.keys(variablesObject)){
        process.env[key] = variablesObject[key];
    }

    console.log(`end environment config ...`);

    return variablesObject;
};
