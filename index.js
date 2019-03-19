'use strict';

const log = console.log.bind(console);
module.exports.log = log;

const error = console.error.bind(console);
module.exports.error = error;

const jsonString = v => JSON.stringify(v, null, 2);
module.exports.jsonString = jsonString;

const logJsonString = (d, name=false) =>
    name === false
        ? log(jsonString(d))
        : log(name, jsonString(d))
;
module.exports.logJsonString = logJsonString;

const logJsonStringHead = (d, name=false) =>
    name === false
        ? logJsonString(Array.isArray(d) ? d[0] : d)
        : logJsonString(Array.isArray(d) ? d[0] : d, name)
;

module.exports.logJsonStringHead = logJsonStringHead;


// Mongo DB result helper
module.exports.mongo = {};
const mongoCheckResult = (result) => result.result && result.result.ok && result.result.ok === 1 ? 'success' : 'error';

const logDeleteMany = (result, name='') => log(
    `mongo.deleteMany(${name})`,
    'result:', mongoCheckResult(result),
    'count:', result && result.deletedCount  ? result.deletedCount  : 'error'
);
module.exports.mongo.logDeleteMany = logDeleteMany;

const logInsertMany = (result, name='') => log(
    `mongo.insertMandy(${name})`,
    'result:', mongoCheckResult(result),
    'insertedCount:', result && result.insertedCount ? result.insertedCount : 'error'
);
module.exports.mongo.logInsertMany = logInsertMany;

const logUpdateMany = (result, name='') => log(
    `mongo.updateMany(${name})`,
    'result:', mongoCheckResult(result),
    'matchedCount:', result && result.matchedCount ? result.matchedCount : 'error' ,
    'modifiedCount:', result && result.modifiedCount  ? result.modifiedCount  : 'error'
);
module.exports.mongo.logUpdateMany = logUpdateMany;