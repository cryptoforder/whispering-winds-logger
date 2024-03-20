const winston = require('winston');
const moment = require('moment');
const chalk = require('chalk');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.printf(info => {
    return `${chalk.green(moment().format('YYYY-MM-DD HH:mm:ss'))} ${chalk.blue(`[${info.level.toUpperCase()}]`)}: ${info.message}`;
  }),
  transports: [
    new winston.transports.Console(),
  ],
});

module.exports = logger;
