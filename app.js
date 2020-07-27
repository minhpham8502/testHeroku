//npm init
//npm install express --save
//npm install body parser --save 
// npm i handlebars consolidate --save
var express = require('express')
var app =express();
var fs =require('fs');

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

var bodyParser =require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
// npm i handlebars consolidate --save
const engines =require('consolidate');
const cons = require('consolidate');
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/jquery',(req,res)=>{
    res.render('jquerydemo');
})
//khai bao khoi tao bien process.env.PORT
const PORT =process.env.PORT || 5000;

var sever = app.listen(5000);

