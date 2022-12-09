
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var testSchema = new Schema({
  "email": string, unique,
  "password": string
});

let pass1 = encodeURIComponent("pa$$word1"); 
let db1 = mongoose.createConnection('mongodb+srv://ajopcs:<password>@cluster0.jgvziwr.mongodb.net/?retryWrites=true&w=majority');



db1.on('error', (err)=>{
  console.log("db1 error!");
});

db1.once('open', ()=>{
  console.log("db1 success!");
});


var testSchema = mongoose.model("test_4", testSchema);


app.post("/register", (req, res) => {
    const email_id = req.body.email_id;
    const password = req.body.password;
});
app.post("/signIn", (req, res) => {
    const email_id = req.body.email_id;
    const password = req.body.password;
});

    
let User; 
module.exports = {
    initialize: function () {
        return new Promise(function (resolve, reject) {
            let db = mongoose.createConnection();
            
            db.on('error', (err) => {
                reject(err); 
            });
            db.once('open', () => {
               User = db.model("users", testSchema);
               resolve("Successfully connected to database!");
            });
        });
    }}