// connection to DB is directed from index.js so this is dummy
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/kicrowDB");

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongo"));

db.once('open', function () {
    console.log('connected to database');
})

module.exports = db;