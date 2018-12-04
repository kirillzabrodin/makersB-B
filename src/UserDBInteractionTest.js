const mongoose = require('mongoose');

let uri = 'mongodb://travis:trav1s@ds155492.mlab.com:55492/makers-bnb';

mongoose.connect(uri);

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {

  // Create song schema
  let userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    rating: Number
  });

  // Store song documents in a collection called "songs"
  let User = mongoose.model('users', userSchema);

  // Create seed data
  let tomas = new User({
    name: "Tomas",
    email: "iamtomas@gmail.com",
    password: "i<3tomas",
    rating: 4.8
  });

  let kirill = new User({
    name: "Kirill",
    email: "squirrel@gmail.com",
    password: "i<3tomas",
    rating: 6.9,
  });

  let ijeoma = new User({
    name: "ijeoma",
    email: "idonthateanyone@gmail.com",
    password: "i<3tomas",
    rating: 10000
  });

  let lorna = new User({
    name: "lorna",
    email: "likethehulk@gmail.com",
    password: "i<3tomas",
    rating: 10000
  });

  /*
   * First we'll add a few songs. Nothing is required to create the
   * songs collection; it is created automatically when we insert.
   */

  let list = [tomas, kirill, ijeoma, lorna]

  User.insertMany(list).then(() => {

    /*
     * Then we need to give Boyz II Men credit for their contribution
     * to the hit "One Sweet Day".
     */

    return User.updateOne({ name: 'Kirill'}, { $set: { password: 'Boyz III Men'} })

  }).then(() => {

    // Only close the connection when your app is terminating
    return mongoose.connection.close()

  }).catch(err => {

    // Log any errors that are thrown in the Promise chain
    console.log(err)

  })
});
