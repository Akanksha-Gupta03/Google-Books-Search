require('dotenv').confiq();
const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static('client/bulid/'));
app.use(express.urlencoded({extended: false}));

app.listen(PORT, function(){
    console.log(`[google-books-search server] RUNNING,http://localhost:${PORT}`);
})
