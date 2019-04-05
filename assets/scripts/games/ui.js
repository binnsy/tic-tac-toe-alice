
const store = require('../store')

const ticTacToeClickSuccess = function (formData) {
  $('#message').text('You just clicked a box!')
  console.log('click successful', formData)
}

const ticTacToeClickFailure = function (formData) {
  $('#message').text('You could not click a box!')
  console.log('click was not successful', formData)
}

const checkWinningCombosSuccess = function (formData) {
  $('#message').text('You won!')
  console.log('', formData)
}

const checkWinningCombosFailure = function (formData) {
  $('#message').text('You lost!')
  console.log('', formData)
}

const createGameSuccess = function (formData) {
  $('#message').text('New game has been created!')
  console.log('', formData)
}

const createGameFailure = function (formData) {
  $('#message').text('Failed to create a new game!')
  console.log('', formData)
}

const checkDrawSuccess = function (formData) {
  $('#message').text('Success in creating a new game!')
  console.log('', formData)
}

const checkDrawFailure = function (formData) {
  $('#message').text('Failed to create a new game!')
  console.log('', formData)
}

module.exports = {
  ticTacToeClickSuccess,
  ticTacToeClickFailure,
  checkWinningCombosSuccess,
  checkWinningCombosFailure,
  createGameSuccess,
  createGameFailure,
  checkDrawSuccess,
  checkDrawFailure

}
