const mongoose = require('mongoose');

//mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {useNewUrlParser: true});
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/booksDB";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI,{
    useMongoClient: true
});

const db = require( './models' );