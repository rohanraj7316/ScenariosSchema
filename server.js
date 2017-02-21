var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Method','GET,POST');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type, \
      Authorization');
    next();
});
app.use(bodyParser());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var dbDetails = config.db;
mongoose.connect(dbDetails,function (err,res) {
   if(err){
       console.log("error occure during conectivity");
   }else{
       console.log("sucessfully connected to database");

   }
});

app.listen(5000,function () {
    console.log('listening at port number 4000');
});