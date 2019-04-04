
// const store = require('../store')

const ticTacToeClickSuccess = function (clickData) {
  $('#message').text('You just clicked a box!')
  console.log('click successful', clickData)
}

const ticTacToeClickFailure = function (clickData) {
  $('#message').text('You could not click a box!')
  console.log('click was not successful', clickData)
}

module.exports = {
  ticTacToeClickSuccess,
  ticTacToeClickFailure

}
