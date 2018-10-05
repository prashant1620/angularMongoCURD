//create a required 

var express = require('express');

var bodyParser = require('body-parser');

var cors= require('cors');

var mongoose = require('mongoose');
var path = require('path');

const route =require('./routes/route');

var app =express();
 //connent to mongodb
 mongoose.connect('mongodb://localhost:27017/ContactApp');
 //on connection
 mongoose.connection.on('connected',()=>{
     console.log("Connected to mongoDb @27017");
 });
 mongoose.connection.on('error',(err)=>{
     if(err){
         console.log("Error in Database Connection"+err);
     }

 });


//port 
var port =3000;
//adding a middleware
app.use(cors());
//body-parser
app.use(bodyParser.json());
//routes
app.use('/api',route);
//static files
app.use(express.static(path.join(__dirname,'public')));


//testing 
app.get('/',(req,res)=>{
 res.send("Hello");

})

app.listen(port,()=>{
    console.log("Server started at port number "+port);
});


