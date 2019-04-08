
const store = require('../store')

const ticTacToeClickSuccess = function (data) {
  store.gameBoard = data.game
  console.log(data)
  // $('#message').text('You just clicked a box!')
  // store.game = data.game
  // store.game = index.game
  // store.game.id
  // store.id = data.id
  // console.log(id)
  // console.log(index.game)

  console.log('click successful' + data.gameBoard)
}

const ticTacToeClickFailure = function (data) {
  $('#message').text('You could not click a box!')
  console.log(data)
  console.log('click was not successful')
}

const checkWinningCombosSuccessX = function (data) {
  $('#message').text('X won!')
}

const checkWinningCombosSuccessO = function (data) {
  $('#message').text('O won!')
  console.log('')
}

const checkWinningCombosFailureX = function (data) {
  $('#message').text('X lost!')
  console.log('')
}

const checkWinningCombosFailureO = function (data) {
  $('#message').text('O lost!')
  console.log('')
}

const createGameSuccess = function (data) {
  $('#message').text('New game has been created! X can start the game!')
  console.log('hi!!!!!!')
  store.gameBoard = data.game
  console.log(data)
  // gameBoard = ['', '', '', '', '', '', '', '', '']
  // $('.box').html('')
  // currentPlayer = 'X'
  // $('.box').on('click', onTicTacToeClick)
  // // function resetBoard() {
  // // $('#message').removeClass(currentPlayer + 'won')
  // //winner = 'null';

  // store.ticTacToeClick()
  //console.log('we need to start a new game!')
}

const createGameFailure = function (data) {
  $('#message').text('Failed to create a new game!')
  console.log('we could not start a new game!')
}

const checkDrawSuccess = function (data) {
  $('#message').text('No winners here! Looks like a draw')
  console.log('')
}

const playerXTurn = function (data) {
  $('#message').text('Player X turn')
  // console.log('')
}

const playerOTurn = function (data) {
  $('#message').text('Player O turn')
  // console.log('')
}

const invalidChoice = function (data) {
  $('#message').text('You cannot click there! Go again.')
}

const checkDrawFailure = function (data) {
  $('#message').text('Failed to create a new game!')
  console.log('')
}

const updateGameSuccess = function (data) {
  $('#message').text('Example successfully updated')
  // $('#message').removeClass()
  // $('#message').addClass('success')
  console.log('Example successfully updated')
}

const updateGameFailure = function (data) {
  $('#message').text('Error on updating example')
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  console.log('')
}

const getGamesSuccess = function (data) {
  $('#getGames').text('You have played ' + store.gameBoard.id + ' games!')
  console.log('Get games successful')
}

const getGamesFailure = function (data) {
  $('#getGames').text('could not recieve number of games played')
  console.log('could not get games')
}
// const createGameSuccess = function (event) {
//   store.game = api.game
//   console.log('create game success')
// }

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
