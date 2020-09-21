'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')

// List Handlers
const listHandlers = (event) => {
  $('.site-content').on('click', onGetAllLists)
  $('.user-page').on('click', onGetMyLists)
  $('.return').on('click', onGetMyLists)
  $('.user-list').on('submit', onAddList)
  $('.new-edit').on('submit', onUpdateList)
  $('.blog-list').on('click', onShowList)
  $('.single-list').on('click', onDeleteList)
}

// List Events
const onGetAllLists = (event) => {
  event.preventDefault()
  $('#authenticated-main').hide()
  $('#authenticated-site').show()
  api.getAllLists()
    .then(ui.getAllListsSuccess)
    .catch(ui.failure)
}

const onGetMyLists = (event) => {
  event.preventDefault()
  $('#authenticated-main').hide()
  $('#authenticated-list').hide()
  $('#authenticated-site').hide()
  $('.edit-list').hide()
  $('#authenticated-user').show()
  api.getMyLists()
    .then(ui.getMyListsSuccess)
    .catch(ui.failure)
}

const onShowList = (event) => {
  event.preventDefault()
  $('.edit-list').show()
  const listIndex = $(event.target).closest('main').index()
  const listId = store.user.lists[listIndex]._id
  api.showList(listId)
    .then(ui.showListSuccess)
    .catch(ui.failure)
}

const onAddList = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.addList(formData)
    .then(ui.addListSuccess)
    .catch(ui.failure)
}

const onUpdateList = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.updateList(formData, store.user.lists._id)
    .then(ui.updateListSuccess)
    .catch(ui.failure)
}

const onDeleteList = (event) => {
  event.preventDefault()
  api.deleteList(store.user.lists._id)
    .then(ui.deleteListSuccess)
    .catch(ui.failure)
}

module.exports = {
  listHandlers,
  onGetAllLists,
  onGetMyLists,
  onShowList,
  onAddList,
  onUpdateList,
  onDeleteList
}
