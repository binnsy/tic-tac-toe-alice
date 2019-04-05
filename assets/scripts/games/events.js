
const getFormFields =
require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

// Define and create a gameBoard
const gameBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'

const onCheckWinningCombos = function () {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    console.log('X has won!')

  // return displayWinner
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    console.log('X has won!')

  // return displayWinner
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    console.log('X has won!')

  // return displayWinner
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    console.log('X has won!')

  // return displayWinner
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    console.log('X has won!')

  // return displayWinner
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    console.log('X has won!')

  // return displayWinner
  } else if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    console.log('X has won!')

  // return displayWinner
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    console.log('X has won!')

  // return displayWinner
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    console.log('O has won!')

    // return displayWinner
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    console.log('O has won!')

    // return displayWinner
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    console.log('O has won!')

    // return displayWinner
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    console.log('O has won!')

    // return displayWinner
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    console.log('O has won!')

    // return displayWinner
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    console.log('O has won!')

    // return displayWinner
  } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    console.log('O has won!')

    // return displayWinner
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    console.log('O has won!')
    // return displayWinner
  } else {
    console.log('no winner yet')

    // const formData = getFormFields(event.target)

    // api.onCheckWinningCombos(formData)
    //   .then(ui.checkWinningCombosSuccess)
    //   .catch(ui.checkWinningCombosFailure)
    // console.log(onCheckWinningCombos)
  }
}

// If the board is full (doesn not equal 0)we have come to a draw.
const onCheckDraw = function () {
  if (gameBoard[0] !== '' && gameBoard[1] !== '' && gameBoard[2] !== '' && gameBoard[3] !== '' && gameBoard[4] !== '' && gameBoard[5] !== '' && gameBoard[6] !== '' && gameBoard[7] !== '' && gameBoard[8] !== '' && gameBoard[9] !== '') {
    console.log('DRAW!')
  }
}
// const formData = getFormFields(event.target)

//     api.onCheckDraw(formData)
//       .then(ui.checkDrawSuccess)
//       .catch(ui.checkDrawFailure)
//     console.log(onCheckDraw)
//   }
// }

const onCreateGame = function (event) {
  event.preventDefault()

  console.log('we need to start a new game!')
}
  // const formData = getFormFields(event.target)
  //
  // api.onCreateGame(formData)
  //   .then(ui.createGameSuccess)
  //   .catch(ui.createGameFailure)
// console.log(onCreateGame)

// A click on the board returns the location of the click via the data-index
const onTicTacToeClick = function (event) {
  event.preventDefault()

  // const formData = getFormFields(event.target)
  // create a click event that corresponds to the numbers on the board
  const index = $(event.target).data('index')
  // console.log('click', index)

  // store the click into the index with current player
  gameBoard[index] = currentPlayer
  console.log(gameBoard)

  // Shows what is in the box or div
  const divText = $(event.target).text()
  // console.log(divText)

  // If the box is empty, allow the current player to mark either an X or O
  if (divText === '') {
    $(event.target).text(currentPlayer)
    // each turn requires a check of winning boxes as well as if it a draw
    onCheckWinningCombos()
    onCheckDraw()
    // current player starts with X, so if thats true, then change to O else stay X
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
  }
}
//
//   api.ticTacToeClick(formData)
//     .then(ui.ticTacToeClickSuccess)
//     .catch(ui.ticTacToeClickFailure)
//   console.log(onTicTacToeClick)
// }

const addHandlers = function () {
  $('.box').on('click', onTicTacToeClick)
  $('#newGame').on('click', onCreateGame)
  // $('.box').text('X', onTicTacToeClick)
  // console.log(onTicTacToeClick)
}

module.exports = {
  addHandlers
}
