'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
// Events file is located up a level in auth folder
const events = require('./games/events.js')

$(() => {
  events.addHandlers()
})
