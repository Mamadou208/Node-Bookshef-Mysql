/**
 * Created by Home on 16/10/2016.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// body-parser middleware for handling request variables
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* Router */
require('./router')(app);

app.listen(3000, function () {
    console.log('Go to localhost:3000');
});