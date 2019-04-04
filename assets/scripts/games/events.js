
const getFormFields =
require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

// Define and create a gameBoard
const gameBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'

// A click on the board returns the location of the click via the data-index
const onTicTacToeClick = function (event) {
  event.preventDefault()

  // create a click event that corresponds to the numbers on the board
  const index = $(event.target).data('index')
  console.log('click', index)

  // store the click into the index with current player
  gameBoard[index] = currentPlayer
  console.log(gameBoard)

  if (currentPlayer === 'X' && $(event.target).text('')) {
    $(event.target).text('X')
    currentPlayer = 'O'
    console.log(gameBoard)
  } else if (currentPlayer === 'O' && $(event.target).text('')) {
    $(event.target).text('O')
    console.log(gameBoard)
    currentPlayer = 'X'
  // } else if gameBoard[index === true] {
  //   console.log('you cant play there')
  }
}
//   } else if (currentPlayer === 'X' && $(event.target).text('')) {
//     $(event.target).text('X')
//     console.log(gameBoard)
//     currentPlayer = 'O'
//   } else if (currentPlayer === 'O' && $(event.target).text('')) {
//     $(event.target).text('O')
//     console.log(gameBoard)
//   } else if (currentPlayer === 'X' && $(event.target).text('')) {
//     $(event.target).text('X')
//     console.log(gameBoard)
//     currentPlayer = 'O'
//   } else if (currentPlayer === 'O' && $(event.target).text('')) {
//     $(event.target).text('O')
//     console.log(gameBoard)
//   } else if (currentPlayer === 'X' && $(event.target).text('')) {
//     $(event.target).text('X')
//     console.log(gameBoard)
//     currentPlayer = 'O'
//   } else if (currentPlayer === 'O' && $(event.target).text('')) {
//     $(event.target).text('O')
//     console.log(gameBoard)
//   }
// }

  //(index !== onTicTacToeClick)) {
//     console.log(gameBoard)
//     currentPlayer === "X"
// }

// gameboard[index] =
//   gameBoard.fill(index)
//   console.log(gameBoard)
// gameBoard[0]
 //console.log(index.toArray(gameBoard[0]))
// define player
// let playerOne = $(event.target).text('X')
// let playerTwo = $(event.target).text('O')
// }
// Check if the space is empty
// If empty,
// if (event.target === index[0]) {
//   console.log(gameBoard[0] === 'taken')
// } else {
//   console.log(gameBoard[0] === 'empty')
// }
// if (!gameBoard[index]) {
//   $(event.target).text('X', onTicTacToeClick)
//   // (event.target).store
// // allow user to mark that space with X or O
// //   gameBoard = (playerOne).value()
// console.log('this has been clicked', gameBoard)
// }
// }
// Store the value of that in the game board arry

// If the space is invalid, display a message and allow them to choose again

    // gameBoard = (gameBoard[index])
    // console.log(gameBoard)

    // If the index of gameboard is taken, display message and let them chose another box

    // gameBoard[0].click === false) {
  //   console.log('this was clicked')
  // } else {
  //   console.log('this is taken')
  // }
 // }

// const playerOne = function (event) {
//   index
//   console.log('player one clicked')
// }
//   if (index !== onTicTacToeClick) {
//     console.log('this is free')
//   } else
//     console.log('this is not free')
// const clickData = getFormFields(event.target)
//
// api.ticTacToeClick(clickData)
//   .then(ui.ticTacToeClickSuccess)
//   .catch(ui.ticTacToeClickFailure)
// console.log(onTicTacToeClick)
// }

const addHandlers = function () {
  $('.box').on('click', onTicTacToeClick)
  // $('.box').text('X', onTicTacToeClick)
  // console.log(onTicTacToeClick)
}

module.exports = {
  addHandlers
}
