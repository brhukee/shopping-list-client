'use strict'

const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')

const getLists = function () {
  api.getLists()
    .then(ui.showListsSuccess)
}

const createNewList = function (event) {
  event.preventDefault()
  const form = event.target
  const list = getFormFields(form)
  api.createNewList(list)
    .then(ui.createNewListSuccess)
    .then(getLists)
}

const updateList = function (event) {
  event.preventDefault()
  const id = $(event.target).attr('id')
  const data = getFormFields(event.target)
  api.updateList(data, id)
    .then(ui.updateListSuccess)
    .then(getLists)
}

const deleteList = function (event) {
  const targetList = event.target
  const listId = $(targetList).attr('data-value-index')
  api.deleteListCall(listId)
    .then(ui.deleteListSuccess)
    .then(getLists)
}

module.exports = {
  getLists: getLists,
  createNewList: createNewList,
  deleteList: deleteList,
  updateList: updateList
}
