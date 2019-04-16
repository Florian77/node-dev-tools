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

const mongoCheckResult = (result) => result.result && result.result.ok && result.result.ok === 1;
module.exports.mongo.checkResult = mongoCheckResult;

const mongoResultName = (result) => mongoCheckResult(result) ? 'OK' : 'ERROR';
module.exports.mongo.resultName = mongoResultName;

const logDeleteMany = (result, name='', fullName=false) => log(
    fullName ? name : `mongo.deleteMany(${name})`,
    'result:', mongoResultName(result),
    'count:', result && result.deletedCount >= 0 ? result.deletedCount  : 'ERROR'
);
module.exports.mongo.logDeleteMany = logDeleteMany;

const logInsertMany = (result, name='', fullName=false) => log(
    fullName ? name : `mongo.insertMandy(${name})`,
    'result:', mongoResultName(result),
    'insertedCount:', result && result.insertedCount >= 0 ? result.insertedCount : 'ERROR'
);
module.exports.mongo.logInsertMany = logInsertMany;

const logUpdateMany = (result, name='', fullName=false) => log(
    fullName ? name : `mongo.updateMany(${name})`,
    'result:', mongoResultName(result),
    'matchedCount:', result && result.matchedCount >= 0 ? result.matchedCount : 'ERROR' ,
    'modifiedCount:', result && result.modifiedCount >= 0 ? result.modifiedCount  : 'ERROR'
);
module.exports.mongo.logUpdateMany = logUpdateMany;


const logDeleteOne = (result, name='', fullName=false) => log(
    fullName ? name : `mongo.deleteOne(${name})`,
    'result:', mongoResultName(result),
    'count:', result && result.deletedCount >= 0 ? result.deletedCount  : 'ERROR'
);
module.exports.mongo.logDeleteOne = logDeleteOne;

const logInsertOne = (result, name='', fullName=false) => log(
    fullName ? name : `mongo.insertMandy(${name})`,
    'result:', mongoResultName(result),
    'insertedCount:', result && result.insertedCount >= 0 ? result.insertedCount : 'ERROR'
);
module.exports.mongo.logInsertOne = logInsertOne;

const logReplaceOne = (result, name='', fullName=false) => log(
    fullName ? name : `mongo.replaceOne(${name})`,
    'result:', mongoResultName(result),
    'insertedCount:', result && result.insertedCount >= 0 ? result.insertedCount : 'ERROR'
);
module.exports.mongo.logReplaceOne = logReplaceOne;

const logUpdateOne = (result, name='', fullName=false) => log(
    fullName ? name : `mongo.updateOne(${name})`,
    'result:', mongoResultName(result),
    'matchedCount:', result && result.matchedCount >= 0 ? result.matchedCount : 'ERROR' ,
    'modifiedCount:', result && result.modifiedCount >= 0 ? result.modifiedCount  : 'ERROR'
);
module.exports.mongo.logUpdateOne = logUpdateOne;