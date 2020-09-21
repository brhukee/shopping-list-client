'use strict'

const authEvents = require('./auth/event')
const listEvents = require('./lists/events')

$(() => {
  // Unauthenticated View
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('.main-view').hide()
  $('#authenticated-main').hide()
  $('#authenticated-user').hide()
  $('#authenticated-list').hide()
  $('#authenticated-edit').hide()
  $('#authenticated-site').hide()
  // Authentication
  $(() => {
    authEvents.authHandlers()
  })
  // Screen Toggle
  $(() => {
    authEvents.toggleHandlers()
  })
  // List Actions
  $(() => {
    listEvents.listHandlers()
  })
})
