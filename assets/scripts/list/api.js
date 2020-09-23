'use strict'

const config = require('./../config')
const store = require('./../store')

const getBooks = function (req, res) {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'GET',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

const createNewBook = function (list) {
  return $.ajax({
    url: config.apiUrl + '/lists',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: list
  })
}

const updateBook = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + `${id}`,
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: data
  })
}

const deleteBookCall = function (bookId) {
  return $.ajax({
    url: config.apiUrl + '/lists/' + `${bookId}`,
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

module.exports = {
  getBooks: getBooks,
  createNewBook: createNewBook,
  deleteBookCall: deleteBookCall,
  updateBook: updateBook
}
