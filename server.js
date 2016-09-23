var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
//var routes = require('./routes');

var index = require('./routes/index');
var logs = require('./routes/logs');
var pin= require('./routes/pin');
var app=express();


//View Engine
//app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:false
}));



app.use('/', index);
app.use('/',logs);
app.use('/',pin);
/*
app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));*/
  app.listen(8880);
console.log('Listening on port 8880.');




