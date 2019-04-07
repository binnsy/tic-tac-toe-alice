
const config = require('../config')

const store = require('../store')

// Same as updateGame
const ticTacToeClick = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + data.game.id,
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
        'over': {
        }
      }
    }
  })
}
// {
//       "game": {
//         "cell": {
//           "index": index.store,
//           "value": value.store
//                 },
//                 "over": false
//   }
//   }
// })
// }
//
// const getGamesPlayed = function () {
//   return $.ajax({
//     url: config.apiUrl + `/games`,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     "game": {
//       "id":
//       "cells":
//       "over": false,
//       "player_x": {
//         "id":
//         "email":
//       },
//       "player_o":
//     }
//   })
// }
//
// const gameFound = function (id) {
//   console.log('in api ID is', id)
//   return $.ajax({
//     url: config.apiUrl + `/games/${store.formData.id}`,
//     method: 'GET'
//   })
// }

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
    },
    data: data
  })
}

// const updateGame = function (id) {
//   return $.ajax({
//     url: config.apiUrl + `/games` / `${id}`,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     games: {
//       cell: store.data,
//       index: store.game,
//       value: {}
//     }
//   })
// }

//     //  we include the users token so the API knows who is making the request
//       Authorization: 'Token token=' + store.user.token
//     }
// }

module.exports = {
  createGame,
  ticTacToeClick,
  getGames
}
