
const {log} = require('./index');

const logDbDeleteMany = (result, name='') => log( `deleteMany(${name})`, 'result:', result.result.ok, 'count:', result.result.n );
module.exports.logDbDeleteMany = logDbDeleteMany;

const logDbInsertMany = (result, name='') => log( `insertMandy(${name})`, 'result:', result.result.ok, 'count:', result.insertedCount );
module.exports.logDbInsertMany = logDbInsertMany;
