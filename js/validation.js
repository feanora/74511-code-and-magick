'use strict';

(function () {
  window.elements.userNameInputElement.addEventListener('invalid', function () {
    if (window.elements.userNameInputElement.validity.tooShort) {
      window.elements.userNameInputElement.setCustomValidity('Придумайте имя подлиннее! Хотя бы 2 символа :-)');
    } else if (window.elements.userNameInputElement.validity.tooLong) {
      window.elements.userNameInputElement.setCustomValidity('Это будет сложно произнести!');
    } else if (window.elements.userNameInputElement.validity.valueMissing) {
      window.elements.userNameInputElement.setCustomValidity('Ну надо же его как-то называть!');
    } else {
      window.elements.userNameInputElement.setCustomValidity('');
    }
  });

  window.elements.userNameInputElement.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, function () {
      evt.preventDefault();
    });
  });
})();
