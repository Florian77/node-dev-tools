'use strict';

const log = console.log.bind(console);
module.exports.log = log;

const error = console.error.bind(console);
module.exports.error = error;

const jsonString = v => JSON.stringify(v, null, 2);
module.exports.jsonString = jsonString;

const logJsonString = (d, name=undefined) => log(jsonString(d), name);
module.exports.logJsonString = logJsonString;

const logJsonStringHead = (d, name=undefined) => {
    logJsonString(Array.isArray(d) ? d[0] : d, name);
};
module.exports.logJsonStringHead = logJsonStringHead;


// Mongo DB result helper
module.exports.mongo = {};

const logDeleteMany = (result, name='') => log( `deleteMany(${name})`, 'result:', result.result.ok, 'count:', result.result.n );
module.exports.mongo.logDeleteMany = logDeleteMany;

const logInsertMany = (result, name='') => log( `insertMandy(${name})`, 'result:', result.result.ok, 'count:', result.insertedCount );
module.exports.mongo.logInsertMany = logInsertMany;