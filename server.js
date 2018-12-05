'use strict'
const express = require('express')
const next = require('next')
const initDb = require("./db").initDb;
const getDb = require("./db").getDb;
const bodyParser = require('body-parser');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const Space = require("./models/Space");
const User = require("./models/User");

initDb()


app.prepare()
.then(() => {
  const server = express()
  console.log(User)
  server.get('/userList', (req, res) => {
    User.find({}).then(function (users) {
     res.send(users);
    });
  })

  server.get('/spaceList', (req, res) => {
   Space.find({}).then(function (spaces) {
     res.send(spaces);
   });
  })

  server.get('/', (req, res) => {
    app.render(req, res, '/index')
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
