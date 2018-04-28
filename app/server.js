const express = require('express')
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.listen(3000,() => console.log('Example app listening on port 3000!') )