'use strict';

window.elements = (function () {
  var userDialogElement = document.querySelector('.setup');
  var userNameInputElement = userDialogElement.querySelector('.setup-user-name');
  return {
    userDialogElement: userDialogElement,
    userNameInputElement: userNameInputElement
  };
})();
