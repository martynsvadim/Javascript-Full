'use strict';

const createLogger = () => {
  const memory = [];

  const warn = (messageText) => {
    memory.push({ message: messageText, dateType: new Date(), type: 'warn' });
  };

  const error = (messageText) => {
    memory.push({ message: messageText, dateType: new Date(), type: 'error' });
  };

  const log = (messageText) => {
    memory.push({ message: messageText, dateType: new Date(), type: 'log' });
  };

  const getRecords = (messageType) => {
    memory.sort((a, b) => b.dateType - a.dateType);

    if (messageType === undefined) {
      return memory.filter((item) => item.type);
    }
    return memory.filter((item) => item.type === messageType);
  };

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// examples

const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
logger2.getRecords('error'); // ===> []
logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
logger3.getRecords('error'); // ===> []
logger3.getRecords(); // ===> []
