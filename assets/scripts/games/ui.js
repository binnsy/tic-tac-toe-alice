
const store = require('../store')

const ticTacToeClickSuccess = function (data) {
  store.gameBoard = data.game
}

const ticTacToeClickFailure = function (data) {
  $('#message').text('We had trouble clicking a box! Please try again.')
}

const checkWinningCombosSuccessX = function (data) {
  $('#message').text('X won!')
}

const checkWinningCombosSuccessO = function (data) {
  $('#message').text('O won!')
}

const checkWinningCombosFailureX = function (data) {
  $('#message').text('X lost!')
}

const checkWinningCombosFailureO = function (data) {
  $('#message').text('O lost!')
}

const createGameSuccess = function (data) {
  $('#message').text('New game has been created! X can start the game!')
  store.gameBoard = data.game
}

const createGameFailure = function (data) {
  $('#message').text('Failed to create a new game!')
}

const checkDrawSuccess = function (data) {
  $('#message').text('No winners here! Looks like a draw')
}

const playerXTurn = function (data) {
  $('#message').text('Player X turn')
}

const playerOTurn = function (data) {
  $('#message').text('Player O turn')
}

const invalidChoice = function (data) {
  $('#message').text('You cannot click there! Go again.')
}

const checkDrawFailure = function (data) {
  $('#message').text('Failed to create a new game!')
}

const updateGameSuccess = function (data) {
  $('#message').text('Example successfully updated')
}

const updateGameFailure = function (data) {
  $('#message').text('Error on updating example')
}

const getGamesSuccess = function (data) {
  $('#message2').text('You have played ' + data.games.length + ' games!')
  setTimeout(function () {
    $('#message2').fadeOut('slow')
  }, 10000)
  $('#message2').show()
}

const getGamesFailure = function (data) {
  $('#getGames').text('could not recieve games')
}

module.exports = {
  ticTacToeClickSuccess,
  ticTacToeClickFailure,
  checkWinningCombosSuccessX,
  checkWinningCombosFailureX,
  checkWinningCombosSuccessO,
  checkWinningCombosFailureO,
  createGameSuccess,
  createGameFailure,
  checkDrawSuccess,
  checkDrawFailure,
  playerXTurn,
  playerOTurn,
  updateGameFailure,
  updateGameSuccess,
  getGamesSuccess,
  getGamesFailure,
  invalidChoice
}
