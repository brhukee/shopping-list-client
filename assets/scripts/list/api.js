'use strict'

const config = require('./../config')
const store = require('./../store')

const getLists = function (req, res) {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'GET',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

const createNewList = function (list) {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: list
  })
}

const updateList = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + `${id}`,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: data
  })
}

const deleteListCall = function (listId) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + `${listId}`,
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

module.exports = {
  getLists: getLists,
  createNewList: createNewList,
  deleteListCall: deleteListCall,
  updateList: updateList
}
