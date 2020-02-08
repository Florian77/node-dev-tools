'use strict';

const log = console.log.bind(console);
module.exports.log = log;

const ramdaLog = name => d => {
    log(String(name), d);
    return d;
};
module.exports.ramdaLog = ramdaLog;

const error = console.error.bind(console);
module.exports.error = error;

const jsonString = v => JSON.stringify(v, null, 2);
module.exports.jsonString = jsonString;

const logJsonString = (d, name = false) =>
    name === false
        ? log(jsonString(d))
        : log(name, jsonString(d))
;
module.exports.logJsonString = logJsonString;

const ramdaLogJsonString = name => d => {
    log(String(name), jsonString(d));
    return d;
};
module.exports.ramdaLogJsonString = ramdaLogJsonString;

const logJsonStringHead = (d, name = false) =>
    name === false
        ? logJsonString(Array.isArray(d) ? d[0] : d)
        : logJsonString(Array.isArray(d) ? d[0] : d, name)
;
module.exports.logJsonStringHead = logJsonStringHead;

const ramdaLogJsonStringHead = name => d => {
    log(String(name), jsonString(Array.isArray(d) ? d[0] : d));
    return d;
};
module.exports.ramdaLogJsonStringHead = ramdaLogJsonStringHead;


// --------------------------------------------------------------------------------------------------------------------------------------
const mongoCheckResult = (result) =>
    result.result && result.result.ok && result.result.ok === 1
;
module.exports.mongoCheckResult = mongoCheckResult;

// --------------------------------------------------------------------------------------------------------------------------------------
const mongoResultName = (result) =>
    mongoCheckResult(result) ? 'OK' : 'ERROR'
;
module.exports.mongoResultName = mongoResultName;

// --------------------------------------------------------------------------------------------------------------------------------------
const mongoDeleteMany = (result) =>
    'result: ' + mongoResultName(result)
    + ' count: ' + (result && result.deletedCount >= 0 ? result.deletedCount : 'ERROR')
;
module.exports.mongoDeleteMany = mongoDeleteMany;

const mongoLogDeleteMany = (result, name = '', fullName = false) =>
    log(fullName ? name : `mongo.deleteMany(${name})`, mongoDeleteMany(result))
;
module.exports.mongoLogDeleteMany = mongoLogDeleteMany;

// --------------------------------------------------------------------------------------------------------------------------------------
const mongoInsertMany = (result) =>
    'result: ' + mongoResultName(result)
    + ' insertedCount: ' + (result && result.insertedCount >= 0 ? result.insertedCount : 'ERROR')
;
module.exports.mongoInsertMany = mongoInsertMany;

const mongoLogInsertMany = (result, name = '', fullName = false) =>
    log(fullName ? name : `mongo.insertMandy(${name})`, mongoInsertMany(result))
;
module.exports.mongoLogInsertMany = mongoLogInsertMany;

// --------------------------------------------------------------------------------------------------------------------------------------
const mongoUpdateMany = (result) =>
    'result:' + mongoResultName(result)
    + 'matchedCount:' + (result && result.matchedCount >= 0 ? result.matchedCount : 'ERROR')
    + 'modifiedCount:' + (result && result.modifiedCount >= 0 ? result.modifiedCount : 'ERROR')
;
module.exports.mongoUpdateMany = mongoUpdateMany;

const mongoLogUpdateMany = (result, name = '', fullName = false) =>
    log(fullName ? name : `mongo.updateMany(${name})`, mongoUpdateMany(result))
;
module.exports.mongoLogUpdateMany = mongoLogUpdateMany;

// --------------------------------------------------------------------------------------------------------------------------------------
const mongoDeleteOne = (result) =>
    'result: ' + mongoResultName(result)
    + ' count: ' + (result && result.deletedCount >= 0 ? result.deletedCount : 'ERROR')
;
module.exports.mongoDeleteOne = mongoDeleteOne;

const mongoLogDeleteOne = (result, name = '', fullName = false) =>
    log(fullName ? name : `mongo.deleteOne(${name})`, mongoDeleteOne(result))
;
module.exports.mongoLogDeleteOne = mongoLogDeleteOne;

// --------------------------------------------------------------------------------------------------------------------------------------
const mongoInsertOne = (result) =>
    'result: ' + mongoResultName(result)
    + ' insertedCount: ' + (result && result.insertedCount >= 0 ? result.insertedCount : 'ERROR')
;
module.exports.mongoInsertOne = mongoInsertOne;

const mongoLogInsertOne = (result, name = '', fullName = false) =>
    log(fullName ? name : `mongo.insertMandy(${name})`, mongoInsertOne(result))
;
module.exports.mongoLogInsertOne = mongoLogInsertOne;

// --------------------------------------------------------------------------------------------------------------------------------------
const mongoReplaceOne = (result) =>
    'result: ' + mongoResultName(result)
    + ' modifiedCount: ' + (result && result.modifiedCount >= 0 ? result.modifiedCount : 'ERROR')
    + (result && result.upsertedCount >= 0 ? ' upsertedCount: ' + result.upsertedCount : "")
;
module.exports.mongoReplaceOne = mongoReplaceOne;

const mongoLogReplaceOne = (result, name = '', fullName = false) =>
    log(fullName ? name : `mongo.replaceOne(${name})`, mongoReplaceOne(result))
;
module.exports.mongoLogReplaceOne = mongoLogReplaceOne;

// --------------------------------------------------------------------------------------------------------------------------------------
const mongoUpdateOne = (result) =>
    'result: ' + mongoResultName(result)
    + ' matchedCount: ' + (result && result.matchedCount >= 0 ? result.matchedCount : 'ERROR')
    + ' modifiedCount: ' + (result && result.modifiedCount >= 0 ? result.modifiedCount : 'ERROR')
    + (result && result.upsertedCount >= 0 ? ' upsertedCount: ' + result.upsertedCount : "")
;
module.exports.mongoUpdateOne = mongoUpdateOne;

const mongoLogUpdateOne = (result, name = '', fullName = false) =>
    log(fullName ? name : `mongo.updateOne(${name})`, mongoUpdateOne(result))
;
module.exports.mongoLogUpdateOne = mongoLogUpdateOne;

// --------------------------------------------------------------------------------------------------------------------------------------
module.exports.mongo = {
    checkResult: mongoCheckResult,
    resultName: mongoResultName,
    logDeleteMany: mongoLogDeleteMany,
    logInsertMany: mongoLogInsertMany,
    logUpdateMany: mongoLogUpdateMany,
    logDeleteOne: mongoLogDeleteOne,
    logInsertOne: mongoLogInsertOne,
    logReplaceOne: mongoLogReplaceOne,
    logUpdateOne: mongoLogUpdateOne,
};