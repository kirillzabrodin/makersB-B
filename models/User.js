var mongoose = require('mongoose');

//Define a schema

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  rating: Number
});

const User = mongoose.model('users', userSchema);

export default User
