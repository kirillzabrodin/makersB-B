'use strict'
const express = require('express')
const next = require('next')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
// const User = require('./models/User')
// const Space = require('./models/Space')

const uri = "mongodb://" + process.env.MLAB_USERNAME + ":" + process.env.MLAB_PASSWORD + "@ds155492.mlab.com:55492/makers-bnb"

const db = mongoose.connect(uri);

app.prepare()
.then(() => {
  const server = express()

  server.get('/asd', (req, res) => {
    console.log("Help")
    return handle(req, res)
  })

  server.get('/space/:id', (req, res) => {
    const actualPage = '/index'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
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
