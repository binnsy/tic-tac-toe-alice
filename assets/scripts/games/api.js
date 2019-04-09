
const config = require('../config')
const store = require('../store')

// Same as updateGame
const ticTacToeClick = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.gameBoard.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': store.index,
          'value': store.currentPlayer
        },
        'over': store.gameIsOver
      }
    }
  })
}

const getGames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  ticTacToeClick,
  getGames
}
