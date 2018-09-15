var faker = require("faker");
var mysql = require("mysql");

var connection = mysql.createConnection
({
   host     :   'localhost',
   user     :   'root@localhost',
   password :   'password',
   database :   'join_us'
});

var data = [];

for (var i = 0; i < 500; i++) 
{
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}

var q = 'INSERT INTO users (email, crated_at) VALUES ?';

connection.query(q, [data], function (error, results) {
  if (error) throw error;
  console.log(results);
});

connection.end();


// var q = 'INSERT INTO users (email) VALUES ("wyatt_thedog@gmail.com")';

// connection.query(q, function (error, results, fields) 
// {
//     if (error) 
//     {
//       throw error; 
//     }
//     console.log(results);

// });

//  inserting data part 2 DINAMICKI

// var person  = 
// {
//     email: faker.internet.email(),
//     crated_at: faker.date.past()
// };

// var end_results = connection.query('INSERT INTO users SET ?', person, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });