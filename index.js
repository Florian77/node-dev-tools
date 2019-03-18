'use strict';

const {mongo} = require('./mongo');
module.exports.mongo = mongo;

const log = console.log.bind(console);
module.exports.log = log;

const error = console.error.bind(console);
module.exports.error = error;

const jsonString = v => JSON.stringify(v, null, 2);
module.exports.stringify = jsonString;

const logJsonString = (d, name=undefined) => log(jsonString(s), name);
module.exports.logJsonString = logJsonString;

const logJsonStringHead = (d, name=undefined) => {
    logJsonString(Array.isArray(d) ? d[0] : d, name);
};
module.exports.logJsonStringHead = logJsonStringHead;

