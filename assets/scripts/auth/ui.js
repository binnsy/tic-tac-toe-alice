'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Congrats! You have signed up successfully. Now sign in to get started!')
  console.log('sign up success ran with the data: ', data)
  store.user = data.user
  // store.gameBoard = data.game
  $('form').trigger('reset')
  // $('#sign-in').show()
  // $('#sign-up').hide()
  $('#sign-up').hide()
  $('.box').show()
  $('#sign-out').show()
  $('#reset').hide()
  $('#getGames').show()
  $('#sign-in').show()
  $('#change-password').hide()

}

const signUpFailure = function (data) {
  $('#message').text('We had difficulty signing you up! Try again.')
  $('form').trigger('reset')
  console.log('sign up failure ran with the data: ', data)

}

const signInSuccess = function (data) {
  $('#message').text('Congrats you have successfully signed in! Click Create New Game to get started!')
  console.log('sign in success ran with the data: ', data)
  store.user = data.user
  console.log('this is store', store)
  $('form').trigger('reset')
  $('#sign-up').hide()
  $('.box').show()
  $('#sign-out').show()
  $('#reset').show()
  $('#getGames').show()
  $('#change-password').show()
  $('#sign-in').hide()

}

const signInFailure = function (data) {
  $('#message').text('Sorry something went wrong! Please try again.')
  console.log('sign up failure ran with the data: ', data)
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#message').text('You have successfully changed your password!')
  console.log('change password success')
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  $('#message').text('Change password failure. Please try again.')
  console.log('Change password failure')
  $('#message').css('color', 'red')
  // console.log('sign up failure ran with the data: ', data)
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  $('#message').text('Sign out successful!')
  console.log('Sign out successful!')
  $('form').trigger('reset')
  $('#sign-in').show()
  $('#change-password').hide()
  $('.row').hide()
  $('#reset').hide()
  $('#sign-out').hide()
  // $('#change-password').hide()
  store.user = null
}

const signOutFailure = function (data) {
  $('#message').text('How about we try signing out again. Looks like something went wrong.')
  console.log('Sign out fail!')
  // console.log('sign up failure ran with the data: ', data)
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
