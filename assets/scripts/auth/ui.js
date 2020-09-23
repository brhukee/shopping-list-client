'use strict'

const store = require('./../store')

const changePassForm = function () {
  $('#pass-change-form').show()
}

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
  $('#signInButton').show()
  $('#signUpButton').show()
}

const onSignUpFailure = function () {
  $('#message').text('Sign up failed, try again')
}

const onSignInSuccess = function (response) {
  store.user = response.user

  $('#message').text('Welcome ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#signInButton').hide()
  $('#signUpButton').hide()
  $('#signOut').show()
  $('#pass-change-button').show()
  $('#getBooks').show()
  $('#list-create').show()
  $('#signOut').show()
}

const onSignInFailure = function () {
  $('#message').show()
  $('#message').text('Sign in failed, try again')
}

const onPassChangeSuccess = function (response) {
  $('#message').show()
  $('#message').text('Password reset successful')
  $('#pass-change-form').trigger('reset')
  $('#pass-change-form').hide()
}

const onPassChangeFailure = function () {
  $('#message').show()
  $('#message').text('Password reset failed, try again')
}

const onSignOutSuccess = function (response) {
  $('#message').text('Sign out successful')
  $('#change').hide()
  $('#signOut').hide()
  $('#pass-change-form').hide()
  $('#pass-change-button').hide()
  $('#getBooks').hide()
  $('#list-create').hide()
  $('#allMyBooks').html('')
  $('#signInButton').show()
  $('#signUpButton').show()
}

const onSignOutFailure = function () {
  $('#message').show()
  $('#message').text('Sign out failed, try again')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onPassChangeSuccess: onPassChangeSuccess,
  onPassChangeFailure: onPassChangeFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure,
  changePassForm: changePassForm
}
