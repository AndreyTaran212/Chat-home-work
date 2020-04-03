const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fe_test', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.User = require('./User.js');
module.exports.Chat = require('./Chat.js');
