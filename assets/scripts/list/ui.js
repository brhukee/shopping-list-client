'use strict'

const showBooksSuccess = function (response) {
  $('#allMyBooks').html('')
  if (response.lists.length === 0) {
    $('#allMyBooks').append(`<p>You don't seem to have any lists, why dont you add some</p>`)
  }
  for (let i = 0; i < response.lists.length; i++) {
    $('#allMyBooks').append(
      `<h4>List ${i + 1}</h4>
      <p>Title: ${response.lists[i].title} </p>
      <p> Author: ${response.lists[i].author}</p>
      <form id='${response.lists[i]._id}' class="list-update">
        <fieldset>
          <legend>Update List!</legend>
          <label for="Title">Title</label>
          <input name="title" type="text" value="${response.lists[i].title}">
          <label for="Author">Author</label>
          <input name="author" type="text" value="${response.lists[i].author}">
          <input type="submit" value="Update List">
        </fieldset>
      </form>
      <button class='delete-button ${response.lists[i]._id}' data-value-index='${response.lists[i]._id}'>Delete List</button>
      <button class='update-button ${response.lists[i]._id}' data-value-index='${response.lists[i]._id}'>Update List</button>`
    )
  }
  $('.list-update').hide()
}

const createNewBookSuccess = function () {
  $('#list-create').trigger('reset')
}

const deleteBookSuccess = function () {
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
  showBooksSuccess: showBooksSuccess,
  createNewBookSuccess: createNewBookSuccess,
  deleteBookSuccess: deleteBookSuccess,
  updateShow: updateShow,
  showSignInForm: showSignInForm,
  showSignUpForm: showSignUpForm,
  showPassChangeForm: showPassChangeForm
}
