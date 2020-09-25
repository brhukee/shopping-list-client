'use strict'

const showListsSuccess = function (response) {
  $('#allMyLists').html('')
  if (response.lists.length === 0) {
    $('#allMyLists').append('<p>You don\'t have any lists.</p>')
  }
  for (let i = 0; i < response.lists.length; i++) {
    $('#allMyLists').append(
      `<h4>List ${i + 1}</h4>
      <p>Title: ${response.lists[i].title} </p>
      <form id='${response.lists[i]._id}' class="list-update">
        <fieldset>
          <legend>Update List</legend>
          <label for="Title">Title</label>
          <input name="title" type="text" value="${response.lists[i].title}">
          <input type="submit" value="Update List">
        </fieldset>
      </form>
      <button class='delete-button ${response.lists[i]._id}' data-value-index='${response.lists[i]._id}'>Delete List</button>
      <button class='update-button ${response.lists[i]._id}' data-value-index='${response.lists[i]._id}'>Update List</button>`
    )
  }
  $('.list-update').hide()
}

const createNewListSuccess = function () {
  $('#list-create').trigger('reset')
}

const deleteListSuccess = function () {
}

const updateShow = function () {
  const updateForm = $(event.target).attr('data-value-index')
  $('#' + updateForm).show()
  $('.' + updateForm).hide()
}
const showSignInForm = function () {
  $('#signInButton').hide()
  // $('#signUpButton').hide()
  $('#sign-in-form').show()
}
const showSignUpForm = function () {
  $('#sign-up-form').show()
  $('#signUpButton').hide()
  // $('#signInButton').hide()
}

const showPassChangeForm = function () {
  $('#pass-change-form').show()
}

module.exports = {
  showListsSuccess: showListsSuccess,
  createNewListSuccess: createNewListSuccess,
  deleteListSuccess: deleteListSuccess,
  updateShow: updateShow,
  showSignInForm: showSignInForm,
  showSignUpForm: showSignUpForm,
  showPassChangeForm: showPassChangeForm
}
