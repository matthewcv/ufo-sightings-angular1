/**
 * Created by matthew on 3/28/2016.
 */

var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan("dev"));
app.use(express.static('.'));

app.use(function(req,res,next){
    res.sendFile(__dirname + '/index.html')
})

app.listen(3001,function(){
    console.log("app listening on port 3001")
})


