const mongoose = require('mongoose');

let uri = 'mongodb://travis:trav1s@ds155492.mlab.com:55492/makers-bnb';

mongoose.connect(uri);

let db = mongoose.connection

const Schema = mongoose.Schema;

const SpaceSchema = new Schema({
	name: { type: String, required: true },
  description: {  type: String, required: true },
  price: { type: String, required: true },
  user_email: { type: String, required: true }
});

const SpaceDB = mongoose.model('Space', SpaceSchema)

export default SpaceDB
