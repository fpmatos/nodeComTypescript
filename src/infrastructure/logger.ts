import * as winston from 'winston';

export class Logger {
    static warn(message: string){
        winston.warn(message);
    }

    static info(message: string){
        winston.info(message, );
    }    

    static error(message: string, error?: Error){
        winston.error(message, error);
    }      

    static config(){
        if(process.env.NODE_ENV === 'production')
        {
            winston.remove(winston.transports.Console);
            winston.add(winston.transports.File, {filename: './logfile.log', level: "error"});
        }       
    }
}