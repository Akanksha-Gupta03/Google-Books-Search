  require('dotenv').config(); 
const express = require( 'express' );
const orm = require( './db/orm.mongoose' );
const bookController = require('./controller/bookContoller');
const db = require("./db/models");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');

const app = express();
app.use( express.static(path.join(__dirname, 'build')) );
app.use(bodyParser.json())
app.use( express.urlencoded({ extended: false }) );

app.post('/api/create', function(req, res){
  console.log(req.body);
  // bookController.create
  db.Books.create(req.body).then(dbBook => res.json(dbBook))
  .catch(err => res.status(422).json(err));
});

app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname,'build' ,'index.html'));
});

app.listen( PORT, function(){
    console.log( `[everest server] RUNNING, http://localhost:${PORT}` );
 });