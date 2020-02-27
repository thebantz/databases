var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      connection.query('SELECT msg_text FROM messages', function (err, res, fields) {
        if (err) {
          throw err;
        } else {
          console.log(res);
        }
      });
    }, // a function which produces all the messages
    post: function () { } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () { },
    post: function () { }
  }
};

