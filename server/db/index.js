var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect();

/* connection.query('INSERT INTO users (username, msg_id, roomname_id) VALUES ("TESTER", 1, 1)', function (error, results, fields) {
  if (error) {
    throw error;
  }
  console.log(results);
}); */