  require('dotenv').config(); 
const express = require( 'express' );
const orm = require( './db/orm.mongoose' );

const PORT = process.env.PORT || 8080;

const app = express();
app.use( express.static('client/build/') );
app.use( express.urlencoded({ extended: false }) );



app.listen( PORT, function(){
    console.log( `[everest server] RUNNING, http://localhost:${PORT}` );
 });