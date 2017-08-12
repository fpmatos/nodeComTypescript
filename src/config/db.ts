import DefaultConnection from './../db/connections/default-connection';
import TesteConnection from './../db/connections/teste-connection';
import * as dbContext from '../common/db-context';
import * as models from '../models';

export let config = () => {

    models.config();

    console.log('start config db ...');

    console.log('start config connection ...');

    var defaultConnection = new DefaultConnection();    
     

    Promise.all([
        defaultConnection.createAndOpenConnection()
    ]).then((values) => {        

        dbContext.add("default", values[0]);

        console.log('end config connection ...');
    }).catch((err) => {
        console.log('error config connection ...', err);
    });    

    console.log('end config db ...');    
};