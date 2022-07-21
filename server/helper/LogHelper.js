import config from './_config.js';
import {mkdirs} from './FileHelper.js';
import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

mkdirs(config.log.debug.path);
mkdirs(config.log.error.path);

const { combine, timestamp, printf, splat, simple } = winston.format;

const logger = winston.createLogger({
    format: combine(
        timestamp({
            format: 'YY/MM/DD HH:mm:ss.SSS',
        }),
        printf((info) => {
            return `${info.timestamp} [${info.level}] ${info.message}`;
        }),
        splat()
    ),

    transports: [

        new winstonDaily({
            name: 'debug-file',
            level: config.log.debug.level,  
            datePattern: 'YYMMDD',          
            dirname: config.log.debug.path, 
            filename: 'log_%DATE%.log',     
            maxsize: 50000000,
            maxFiles: 50,
            zippedArchive: true
        }),

        new winstonDaily({
            name: 'error-file',
            level: config.log.error.level,
            datePattern: 'YYMMDD',
            dirname: config.log.error.path,
            filename: 'error_%DATE%.log',
            maxsize: 50000000,
            maxFiles: 50,
            zippedArchive: true
        })
    ]
});

export default logger;