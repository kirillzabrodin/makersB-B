'use strict'

const Archetype = require('archetype-js')
const SpaceType = require('./../models/SpaceType')
const mongoose = require('mongoose');
const express = require('express')

module.exports = db => {
  const router = express.Router()

  const wrapAsync = handler => (req, res) => handler(req)
    .then(result => res.json(result))
    .catch(error => res.status(500).json({ error: error.message }))

  router.get('/', wrapAsync(async function(req) {
    return db.collection('space').find().sort({ createdAt: -1 }).toArray()
  }))

  router.post('/', wrapAsync(async function(req) {
    const book = new SpaceType(req.body)
    await db.collection('space').insertOne(book)
    return { book }
  }))

  router.delete('/:id', wrapAsync(async function(req) {
    const { result } = await db.collection('space').deleteOne({
      _id: Archetype.to(req.params.id, ObjectId)
    })
    return { result }
  }))

  return router
}
