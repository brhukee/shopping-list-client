'use strict'

const ui = require('./ui')
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')

const getBooks = function () {
  api.getBooks()
    .then(ui.showBooksSuccess)
}

const createNewBook = function (event) {
  event.preventDefault()
  const form = event.target
  const list = getFormFields(form)
  api.createNewBook(list)
    .then(ui.createNewBookSuccess)
    .then(getBooks)
}

const updateBook = function (event) {
  event.preventDefault()
  const id = $(event.target).attr('id')
  const data = getFormFields(event.target)
  api.updateBook(data, id)
    .then(ui.updateBookSuccess)
    .then(getBooks)
}

const deleteBook = function (event) {
  const targetBook = event.target
  const bookId = $(targetBook).attr('data-value-index')
  api.deleteBookCall(bookId)
    .then(ui.deleteBookSuccess)
    .then(getBooks)
}

module.exports = {
  getBooks: getBooks,
  createNewBook: createNewBook,
  deleteBook: deleteBook,
  updateBook: updateBook
}
