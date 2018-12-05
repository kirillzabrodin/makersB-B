const mongoose = require('mongoose');
let _db;

function initDb(callback) {
  if (_db) {
    console.log("Trying to init DB again!");
    return callback(null, _db);
  }
  const uri = "mongodb://" + process.env.MLAB_USERNAME + ":" + process.env.MLAB_PASSWORD + "@ds155492.mlab.com:55492/makers-bnb"
  mongoose.connect(uri);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  function connected(err, db) {
    if (err) {
      return callback(err);
    }
    console.log("DB initialized");
    _db = db;
    return callback(null, _db);
    }
}

function getDb() {
    if (!_db) {
      return console.log('DB connection not initialised');
    }
    return _db;
}

module.exports = {
    getDb,
    initDb
};
