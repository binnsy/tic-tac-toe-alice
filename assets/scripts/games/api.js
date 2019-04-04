
const config = require('../config')

// const store = require('../store')

const ticTacToeClick = function (clickData) {
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    method: 'PATCH',
    data: clickData

  })
}

module.exports = {
  ticTacToeClick
}
