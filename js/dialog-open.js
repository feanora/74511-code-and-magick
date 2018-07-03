'use strict';

(function () {
  var elementsModule = window.elements;
  var popupOpenElement = elementsModule.popupOpen;
  var userDialogElement = elementsModule.userDialog;
  var popupCloseElement = elementsModule.userDialog.querySelector('.setup-close');
  var utilModule = window.util;

  var popupEscPressHandler = function (evt) {
    if (elementsModule.userNameInput === document.activeElement) {
      evt.stopPropagation();
    } else {
      utilModule.performActionIfEscEvent(evt, closePopup);
    }
  };

  // Открытие окна настройки персонажа
  var openPopup = function () {
    userDialogElement.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
  };

  // Закрытие окна настройки персонажа
  var closePopup = function () {
    userDialogElement.classList.add('hidden');
    userDialogElement.style.left = '50%';
    userDialogElement.style.top = '80px';
    document.removeEventListener('keydown', popupEscPressHandler);
  };

  popupOpenElement.addEventListener('click', function () {
    openPopup();
  });

  popupOpenElement.addEventListener('keydown', function (evt) {
    utilModule.performActionIfEnterEvent(evt, openPopup);
  });

  popupCloseElement.addEventListener('click', function () {
    closePopup();
  });

  popupCloseElement.addEventListener('keydown', function (evt) {
    utilModule.performActionIfEnterEvent(evt, closePopup);
  });

  window.dialogOpen = {
    closePopup: closePopup
  };
})();
