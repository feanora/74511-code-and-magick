'use strict';

(function () {
  var inputElement = window.elements.userNameInputElement;
  inputElement.addEventListener('invalid', function () {
    if (inputElement.validity.tooShort) {
      inputElement.setCustomValidity('Придумайте имя подлиннее! Хотя бы 2 символа :-)');
    } else if (inputElement.validity.tooLong) {
      inputElement.setCustomValidity('Это будет сложно произнести!');
    } else if (inputElement.validity.valueMissing) {
      inputElement.setCustomValidity('Ну надо же его как-то называть!');
    } else {
      inputElement.setCustomValidity('');
    }
  });

  inputElement.addEventListener('keydown', function (evt) {
    window.util.performActionIfEnterEvent(evt, function () {
      evt.preventDefault();
    });
  });
})();
