var mongoose = require('mongoose');

//Define a schema

const spaceSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    owner: {
      id: String
    }
  });

const Space = mongoose.model('spaces', spaceSchema);

export default Space
