const express = require('express');
const mysql = require('mysql');
const bodyParser  = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

const connection = mysql.createConnection
({
  host     : 'localhost',
  user     : 'root',
  database : 'join_us',
//   port: 3000,
  password: 'Naruto0092'
});

app.get('/', (req, res) => 
{
    const q = "SELECT COUNT(*) AS count FROM users";
    connection.query(q, (error, results) => 
    {
        if(error) throw error;
        let count = results[0].count; 
        res.render("home", {count: count});
    })
});

app.post('/register', (req, res) => {
    const person = {
        email: req.body.email
    };
    connection.query('INSERT INTO users SET ?', person, (error, results) => 
    {
        if (error) throw error
        res.redirect("/");
    });
});



app.listen(3000, () => console.log('Example app listening on port 3000!'));
