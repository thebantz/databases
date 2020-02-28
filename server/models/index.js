var db = require('../db');


module.exports = {
  messages: {
    get: function () {
      connection.query('SELECT msg_text, username_id FROM messages INNER JOIN users WHERE username_id = username_id', function (err, res, fields) {
        if (err) {
          throw err;
        } else {
          console.log(res);
        }
      });
    }, // a function which produces all the messages
    post: function (msgText) {
      db.query(`INSERT INTO messages (msg_text) VALUES ('${msgText}')`, function (err, res, fields) {
        if (err) {
          throw err;
        } else {
          console.log(res);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (username) {
      db.query('SELECT username FROM users', (err, res) => {
        if (err) {
          throw err;
        } else {
          console.log(res[0].username);
        }
      });
    },
    post: function (username) {
      db.query(`INSERT INTO users (username) VALUES ('${username}')`, function (err, res, fields) {
        if (err) {
          throw err;
        } else {
          console.log(res);
        }
      });
    }
  }
};

