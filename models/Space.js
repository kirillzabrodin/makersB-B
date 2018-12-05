var mongoose = require('mongoose');

const spaceSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    owner: {
      id: String
    }
  });


Space = mongoose.model('Space', spaceSchema);

module.exports = Space
