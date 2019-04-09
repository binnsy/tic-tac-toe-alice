
const getFormFields =
require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// Define and create a gameBoard
let gameBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
let gameIsOver = false

const onCheckWinningCombos = function () {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
  // return displayWinner
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
  // return displayWinner
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
  // return displayWinner
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
  // return displayWinner
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
  // return displayWinner
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
  // return displayWinner
  } else if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
  // return displayWinner
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
  // return displayWinner
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    ui.checkWinningCombosSuccessO()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // return displayWinner
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    ui.checkWinningCombosSuccessO()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // return displayWinner
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    ui.checkWinningCombosSuccessO()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // return displayWinner
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    ui.checkWinningCombosSuccessO()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // return displayWinner
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    ui.checkWinningCombosSuccessO()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // return displayWinner
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    ui.checkWinningCombosSuccessO()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // return displayWinner
  } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    ui.checkWinningCombosSuccessO()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // return displayWinner
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    ui.checkWinningCombosSuccessO()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // e;se check draw
  } else {
    onCheckDraw()
  }
}

// If the board is full (doesn not equal 0)we have come to a draw.
const onCheckDraw = function () {
  if (gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' && gameBoard[3] !== '' && gameBoard[4] !== '' && gameBoard[5] !== '' && gameBoard[6] !== '' && gameBoard[7] !== '' && gameBoard[8] !== '' && gameBoard[9] !== '') {
    ui.checkDrawSuccess()
    gameIsOver = true
    store.gameIsOver = gameIsOver
  }
}

const onCreateGame = function (event) {
  event.preventDefault()
  $('.row').show()
  $('.box').html('')
  currentPlayer = 'X'
  gameBoard = ['', '', '', '', '', '', '', '', '']
  gameIsOver = false
  store.gameIsOver = gameIsOver

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

// A click on the board returns the location of the click via the data-index
const onTicTacToeClick = function (data) {
  event.preventDefault()

  if (gameIsOver === false) {
  // Shows what is in the box or div
    const divText = $(event.target).text()
    // If the box is empty, allow the current player to mark either an X or O
    if (divText === '') {
      $(event.target).text(currentPlayer)
      store.currentPlayer = currentPlayer
      // create a click event that corresponds to the numbers on the board
      const index = $(event.target).data('index')
      store.index = index
      // store the click into the index with current player
      gameBoard[index] = currentPlayer
      // current player starts with X, so if thats true, then change to O else stay X
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
      $('#message').text('It is ' + currentPlayer + 's turn!')
      onCheckWinningCombos()

      api.ticTacToeClick(data)
        .then(ui.ticTacToeClickSuccess)
        .catch(ui.ticTacToeClickFailure)
    }
  }
}

// Get total number of games user logged in has played
const onGetGames = function (event) {
  event.preventDefault()

  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const addHandlers = function () {
  $('.box').on('click', onTicTacToeClick)
  $('#reset').on('click', onCreateGame)
  $('#getGames').on('click', onGetGames)
}

module.exports = {
  addHandlers
}
