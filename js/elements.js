'use strict';

(function () {
  var userDialogElement = document.querySelector('.setup');
  var userNameInputElement = userDialogElement.querySelector('.setup-user-name');
  var popupOpenElement = document.querySelector('.setup-open');

  window.elements = {
    userDialog: userDialogElement,
    userNameInput: userNameInputElement,
    popupOpen: popupOpenElement
  };
})();
