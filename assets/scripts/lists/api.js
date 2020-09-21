'use strict'

const store = require('../store')
const config = require('../config')

const getAllLists = () => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/lists',
    method: 'GET'
  })
}

const getMyLists = () => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/users/' + store.user._id + '/lists',
    method: 'GET'
  })
}

const showList = (listId) => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/lists/' + listId,
    method: 'GET'
  })
}

const addList = (formData) => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/lists',
    method: 'POST',
    data: formData
  })
}

const updateList = (formData, listId) => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/lists/' + listId,
    method: 'PATCH',
    data: formData
  })
}

const deleteList = (listId) => {
  return $.ajax({
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/lists/' + listId,
    method: 'DELETE'
  })
}

module.exports = {
  getAllLists,
  getMyLists,
  showList,
  addList,
  updateList,
  deleteList
}
