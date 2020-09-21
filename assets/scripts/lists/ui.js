'use strict'

const showListsTemplate = require('../templates/blog-list.handlebars')
const showListTemplate = require('../templates/single-list.handlebars')
const store = require('../store')

const getAllListsSuccess = (data) => {
  $('#authenticated-list').hide()
  $('#authenticated-edit').hide()
  $('.change-password').hide()
  $('.welcome').text('Shopping Lists')
  $('.main-view').text('ui.js line 12 delete if you can see')
  if (data.lists.length < 5) {
    $('.button-bar-bottom-site').hide()
  } else {
    $('.button-bar-bottom-site').show()
  }
  const showListsHtml = showListsTemplate({ lists: data.lists })
  $('.site-list').append(showListsHtml)
}

const getMyListsSuccess = (data) => {
  $('.return').hide()
  $('#authenticated-edit').hide()
  $('.change-password').hide()
  $('.single-list').empty()
  $('.site-list').empty()
  $('.blog-list').empty()
  store.user.lists = data.lists
  if (data.lists.length < 5) {
    $('.button-bar-bottom-user').hide()
  } else {
    $('.button-bar-bottom-user').show()
  }
  $('.welcome').text(store.user.name)
  if (data.lists.length === 0) {
    $('.main-view').text('Create a new list')
  } else {
    $('.main-view').text('Create a new list or select an old one to review')
  }
  const showListsHtml = showListsTemplate({ lists: store.user.lists })
  $('.blog-list').append(showListsHtml)
}

const showListSuccess = (data) => {
  store.user.lists._id = data.list._id
  $('.button-bar-bottom-user').hide()
  $('.blog-list').empty()
  $('.return').show()
  $('.main-view').text('Displaying requested list')
  const showListsHtml = showListTemplate({ list: data.list })
  $('.single-list').append(showListsHtml)
}

const addListSuccess = (data) => {
  store.list = data.list
  $('.main-view').text('List created successfully')
  $('.user-list')[0].reset()
}

const updateListSuccess = (data) => {
  $('.new-edit').hide()
  $('.main-view').text('List updated')
  $('.new-edit')[0].reset()
}

const deleteListSuccess = () => {
  $('.edit-list').hide()
  $('.single-list').empty('')
  $('.main-view').text('List deleted')
}

const failure = (error) => {
  $('.main-view').text('Not sure why you would be seeing this, maybe it is a hidden feature')
  console.error(error)
}

module.exports = {
  getAllListsSuccess,
  getMyListsSuccess,
  showListSuccess,
  addListSuccess,
  updateListSuccess,
  deleteListSuccess,
  failure
}
