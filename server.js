var express = require("express");
var app = express();
var path = require("path"); 
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
var HTTP_PORT = process.env.PORT || 8080;  

function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var testSchema = new Schema({
  "email": string, unique,
  "password": string
});

let pass1 = encodeURIComponent("pa$$word1"); // this step is needed if there are special characters in your password, ie "$"
let db1 = mongoose.createConnection('mongodb+srv://ajopcs:<password>@cluster0.jgvziwr.mongodb.net/?retryWrites=true&w=majority');

// verify the db1 connection

db1.on('error', (err)=>{
  console.log("db1 error!");
});

db1.once('open', ()=>{
  console.log("db1 success!");
});


var testSchema = mongoose.model("test_4", testSchema);




app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/Views/home.html"));
});

app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname, "/Views/register.html"));
});

app.get("/signIn", function(req, res){
    res.sendFile(path.join(__dirname, "/Views/signIn.html"));
});

app.post("/register", (req, res) => {
    const email_id = req.body.email_id;
    const password = req.body.password;
});
app.post("/signIn", (req, res) => {
    const email_id = req.body.email_id;
    const password = req.body.password;
});

    
app.use((req, res) => {
    res.status(404).send("Sorry Guys This page is not found");
  });

app.listen(HTTP_PORT, onHttpStart);
  