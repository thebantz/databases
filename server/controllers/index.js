var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //models.messages.get();
      models.messages.get();
      res.sendStatus(200);
    }, // a function which handles a get request for all messages\

    post: function (req, res, cb) {
      console.log('this is res 2.0: ', res);
      console.log('this is req: ', req.query.msg_text);
      models.messages.post(req.query.msg_text);
      res.sendStatus(200);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //console.log('THIS IS REQ: ', req, 'THIS IS RES: ', res);
      models.users.get();
      res.sendStatus(200);
    },
    post: function (req, res) {
      //models.messages.post();
      //req
      // req.query()
      models.users.post(req.query.username);
      res.sendStatus(200);
    }
  }
};

