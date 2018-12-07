'use strict'

const Archetype = require('archetype-js')

module.exports = new Archetype({
  name: {
    $type: 'string',
    $default: new Date()
  },
  price: {
    $type: Number,
    $required: true
  },
  owner_id: {
    $type: 'string',
    $required: true
  },
  decription: {
    $type: 'string',
    $required: true
  }
}).compile('SpaceType')
