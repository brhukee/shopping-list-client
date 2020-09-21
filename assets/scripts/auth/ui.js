'use strict'

const store = require('../store')

const signUpSuccess = (response) => {
  $('.sign-up')[0].reset()
  $('.auth-view').text('Sign up success')
  $('.left-button').show()
  $('.sign-up').hide()
}
const signUpFailure = () => {
  $('.sign-up')[0].reset()
  $('.auth-view').text('Sign up failed')
  $('.left-button').show()
  $('.sign-up').hide()
}

const signInSuccess = (response) => {
  store.user = response.user
  $('#unauthenticated').hide()
  $('.change-password').hide()
  $('.right-button').show()
  $('.sign-in').hide()
  $('.main-view').show()
  $('#authenticated-main').show()
  $('.sign-in')[0].reset()
  $('.welcome').text('Welcome ' + store.user.name)
  $('.main-view').text('Create a new list or edit a pre-existing list')
}
const signInFailure = () => {
  $('.sign-in')[0].reset()
  $('.auth-view').text('Sign in failed')
  $('.right-button').show()
  $('.sign-in').hide()
}

const changePasswordSuccess = () => {
  $('.change-password').hide()
  $('.change-password')[0].reset()
  $('.main-view').text('Password changed successfully')
}
const changePasswordFailure = function () {
  $('.change-password').hide()
  $('.main-view').text('Password change not successful, please try again')
}

const signOutSuccess = () => {
  $('#unauthenticated').show()
  $('.auth-view').text('if you can see this delete me in auth->ui.js line 49')
  $('#authenticated-main').hide()
  $('#authenticated-user').hide()
  $('#authenticated-site').hide()
  $('#authenticated-list').hide()
  $('#authenticated-edit').hide()
  store.user = null
  $('.blog-list').empty()
  $('.site-list').empty()
  $('.user-list')[0].reset()
  $('.new-edit')[0].reset()
}
const signOutFailure = () => {
  $('.main-view').text('Sign out unsuccessful')
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
