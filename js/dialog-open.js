'use strict';

(function () {
  var popupOpenElement = document.querySelector('.setup-open');
  var popupCloseElement = window.elements.userDialogElement.querySelector('.setup-close');
  var popupEscPressHandler = function (evt) {
    if (window.elements.userNameInputElement === document.activeElement) {
      evt.stopPropagation();
    } else {
      window.util.performActionIfEscEvent(evt, closePopup);
    }
  };

  // Открытие окна настройки персонажа
  var openPopup = function () {
    window.elements.userDialogElement.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
  };

  // Закрытие окна настройки персонажа
  var closePopup = function () {
    window.elements.userDialogElement.classList.add('hidden');
    window.elements.userDialogElement.style.left = '50%';
    window.elements.userDialogElement.style.top = '80px';
    document.removeEventListener('keydown', popupEscPressHandler);
  };

  popupOpenElement.addEventListener('click', function () {
    openPopup();
  });

  popupOpenElement.addEventListener('keydown', function (evt) {
    window.util.performActionIfEnterEvent(evt, openPopup);
  });

  popupCloseElement.addEventListener('click', function () {
    closePopup();
  });

  popupCloseElement.addEventListener('keydown', function (evt) {
    window.util.performActionIfEnterEvent(evt, closePopup);
  });

  window.dialogOpen = {
    closePopup: closePopup
  };
})();
