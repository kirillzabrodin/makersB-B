var mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  rating: Number
});

User = mongoose.model('User', userSchema);

module.exports = User
