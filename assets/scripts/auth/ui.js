'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log('sign up success ran with the data: ', data)
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('#sign-up').text('We had difficulty signing you up! Try again.')
  $('form').trigger('reset')
  console.log('sign up failure ran with the data: ', data)
}

const signInSuccess = function (data) {
  $('#sign-in').text('Congrats you have successfully signed in!')
  console.log('sign in success ran with the data: ', data)

  store.user = data.user
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  $('#sign-in').text('Sorry something went wrong! Please try again.')
  console.log('sign up failure ran with the data: ', data)
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('#change-password').text('Change password success')
  console.log('change password success')
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  $('#change-password').text('Change password failure')
  console.log('Change password failure')
  $('#message').css('color', 'red')
  // console.log('sign up failure ran with the data: ', data)
  $('form').trigger('reset')
}

const signOutSuccess = function (data) {
  $('#sign-out').text('Sign out success')
  console.log('Sign out successful!', data)
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function (data) {
  $('#sign-out').text('Change password failure')
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
