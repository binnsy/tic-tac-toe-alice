
const getFormFields =
require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

// Define and create a gameBoard
let gameBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
let gameIsOver = false
console.log(gameIsOver)

const onCheckWinningCombos = function () {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    console.log('X has won!')
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    console.log(gameIsOver)
    // $('.box').off('click', onTicTacToeClick)
    // gameOver()
    gameIsOver = true
    store.gameIsOver = gameIsOver
  // return displayWinner
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    console.log('X has won!')
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // $('.box').off('click', onTicTacToeClick)

  // return displayWinner
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    console.log('X has won!')
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // $('.box').off('click', onTicTacToeClick)

  // return displayWinner
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    console.log('X has won!')
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // $('.box').off('click', onTicTacToeClick)

  // return displayWinner
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    console.log('X has won!')
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // $('.box').off('click', onTicTacToeClick)

  // return displayWinner
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    console.log('X has won!')
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // $('.box').off('click', onTicTacToeClick)

  // return displayWinner
  } else if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    console.log('X has won!')
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // $('.box').off('click', onTicTacToeClick)

  // return displayWinner
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    console.log('X has won!')
    ui.checkWinningCombosSuccessX()
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // $('.box').off('click', onTicTacToeClick)

  // return displayWinner
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    console.log('O has won!')
    ui.checkWinningCombosSuccessO()
    // $('.box').off('click', onTicTacToeClick)
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // return displayWinner
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    console.log('O has won!')
    currentPlayer = 'O'
    ui.checkWinningCombosSuccessO()
    // $('.box').off('click', onTicTacToeClick)
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // return displayWinner
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    console.log('O has won!')
    ui.checkWinningCombosSuccessO()
    // $('.box').off('click', onTicTacToeClick)
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // return displayWinner
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    console.log('O has won!')
    ui.checkWinningCombosSuccessO()
    // $('.box').off('click', onTicTacToeClick)
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // return displayWinner
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    console.log('O has won!')
    ui.checkWinningCombosSuccessO()
    // $('.box').off('click', onTicTacToeClick)
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // return displayWinner
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    console.log('O has won!')
    ui.checkWinningCombosSuccessO()
    // $('.box').off('click', onTicTacToeClick)
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // return displayWinner
  } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    console.log('O has won!')
    ui.checkWinningCombosSuccessO()
    // $('.box').off('click', onTicTacToeClick)
    gameIsOver = true
    store.gameIsOver = gameIsOver
    // return displayWinner
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    console.log('O has won!')
    ui.checkWinningCombosSuccessO()
    // $('.box').off('click', onTicTacToeClick)
    // return displayWinner
    gameIsOver = true
    store.gameIsOver = gameIsOver
  } else {
    onCheckDraw()
    console.log('no winner yet')
  }
}

// If the board is full (doesn not equal 0)we have come to a draw.
const onCheckDraw = function () {
  if (gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' && gameBoard[3] !== '' && gameBoard[4] !== '' && gameBoard[5] !== '' && gameBoard[6] !== '' && gameBoard[7] !== '' && gameBoard[8] !== '' && gameBoard[9] !== '') {
    console.log('DRAW!')
    ui.checkDrawSuccess()
    gameIsOver = true
    store.gameIsOver = gameIsOver
  }
}

const onCreateGame = function (event) {
  event.preventDefault()
  $('.row').show()
  console.log('clicked on onCreateGame')
  // store.gameBoard = store.data
// store.gameBoard = store.data
// console.log(gameBoard)

  // console.log('hi')

  // $('.box').on('click', onTicTacToeClick)
  $('.box').html('')
  currentPlayer = 'X'
  gameBoard = ['', '', '', '', '', '', '', '', '']
  gameIsOver = false
  store.gameIsOver = gameIsOver
  // onTicTacToeClick()
  // console.log(data.gameBoard)
  // console.log(data)
// const data = store.gameBoard

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}
// A click on the board returns the location of the click via the data-index
const onTicTacToeClick = function (data) {
  event.preventDefault()

  if (gameIsOver === false) {
  // console.log('you have to sign in')
  // store.game = data.game
  // console.log(data.game)
  // create a click event that corresponds to the numbers on the board
  const index = $(event.target).data('index')
  store.index = index
  console.log(index)
  // console.log(index)
  // store the click into the index with current player
  gameBoard[index] = currentPlayer

  console.log(gameBoard)

  // store.game = data.game
  // store.game = index.game
  // console.log(data.gameBoard)
  // console.log(data.game)
  // Shows what is in the box or div
  const divText = $(event.target).text()
  // If the box is empty, allow the current player to mark either an X or O
  if (divText === '') {
    $(event.target).text(currentPlayer)
    store.currentPlayer = currentPlayer
    // current player starts with X, so if thats true, then change to O else stay X
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    $('#message').text('It is ' + currentPlayer + 's turn!')


      console.log(currentPlayer, 'turn')
      onCheckWinningCombos()

      api.ticTacToeClick(data)
        .then(ui.ticTacToeClickSuccess)
        .catch(ui.ticTacToeClickFailure)
    }
  }
}
//   $('.box').on('click', onTicTacToeClick)
  // store.game = data.game
  // $('.box').html('')


  // // function resetBoard() {
  // // $('#message').removeClass(currentPlayer + 'won')
  // //winner = 'null';
  // $('.message').text('X can start the game!')
  //

  //
  // onTicTacToeClick()
  // console.log(gameBoard)
  // api.createGame()
    // .then(ui.createGameSuccess)
    // .then(onTicTacToeClick())
    // .catch(ui.createGameFailure)
//     // ticTacToeClick()
// }
  // } else if
  // (divText !== '') {
  //   $('#message').text('You cannot click there!')
    // console.log('you cannot click there')
    // ui.invalidChoice()
    // onCheckWinningCombos === false && onCheckDraw === false
    //   $('#message').text('It is now time for ' + currentPlayer + ' to make a move!')
    // }
    // each turn requires a check of winning boxes as well as if it a draw





    // const data = getFormFields(event.target)
    // const game = data.gameBoard
    // console.log(data)
  // } else {
  // // (divText !== '') {
  //   $('#message').text('You cannot click there!')
    // game = store.gameBoard


// const gameOver = function (event) {
//   if (CheckWinningCombos() = true || onCheckDraw() = true || $('#reset').on('click', onCreateGame))
//   console.log('game over', gameOver)
// }

const onGetGames = function (event) {
  event.preventDefault()
  //let user = store.user.token
  // const data = store.data
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const addHandlers = function () {

  $('.box').on('click', onTicTacToeClick)
  $('#reset').on('click', onCreateGame)
  // $('#reset').click(gameBoard.reset)
  $('#getGames').on('click', onGetGames)
}

module.exports = {
  addHandlers
}
