'use strict';

(function () {
  var elementsModule = window.elements;
  var formElement = elementsModule.userDialog.querySelector('.setup-wizard-form');
  var inputElement = elementsModule.userNameInput;

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

  // Обработчик успешной отправки формы
  var loadHandler = function () {
    window.dialogOpen.closePopup();
  };

  // Обработчик ошибки
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 600px auto; padding: 20px; width: 400px; color: black; text-align: center; background-color: white; border: 2px solid red';
    node.style.position = 'absolute';
    node.style.left = '0';
    node.style.right = '0';
    node.style.fontZixe = '30px';
    node.textContent = errorMessage + ' Пожалуйста, попробуйте позже';
    document.body.insertAdjacentElement('afterbegin', node);
  };

  // Обработчик отправки формы
  var formElementSubmitHandler = function (evt) {
    window.backend.save(new FormData(formElement), loadHandler, errorHandler);
    evt.preventDefault();
  };

  formElement.addEventListener('submit', formElementSubmitHandler);
})();
