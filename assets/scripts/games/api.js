
const config = require('../config')

const store = require('../store')

// const ticTacToeClick = function (formData) {
//   return $.ajax({
//     url: config.apiUrl + `/games/${store.game.id}`,
//     method: 'PATCH',
//     // Add an authorization header, this tells the API, which user si making the request
//     headers: {
//     //  we include the users token so the API knows who is making the request
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
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
//     url: config.apiUrl + 	`/games[?over=true]`,
//     method: 'GET'
//   })
// }
//
// const gamesFound = function () {
//   return $.ajax({
//     url: config.apiUrl + '/games[?over=]',
//     method: 'GET'
//   })
// }
// const gameFound = function (id) {
//   console.log('in api ID is', id)
//   return $.ajax({
//     url: config.apiUrl + `/games/${store.formData.id}`,
//     method: 'GET'
//   })
// }
// const createGame = function (formData) {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'POST',
//     headers: {
//     //  we include the users token so the API knows who is making the request
//       Authorization: 'Token token=' + store.user.token
//     },
//   })
// }
//
// const updateGame = function (formData) {
//   return $.ajax({
//     url: config.apiUrl + `/games/${store.formData.id}`,
//     method: 'PATCH',
//     headers: {
//     //  we include the users token so the API knows who is making the request
//       Authorization: 'Token token=' + store.user.token
//     }
// }


module.exports = {
  // gameFound,
  // gamesFound,
  // gameCreated,
  // updateGame,
  //ticTacToeClick
}
