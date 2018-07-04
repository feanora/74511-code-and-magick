'use strict';

(function () {
  var userWizard = window.wizard;
  var debounceModule = window.debounce;
  var coatColor;
  var eyesColor;
  var fireballColor;
  var wizards = [];

  // Расчет ранга похожести волшебника
  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    if (wizard.colorFireball === fireballColor) {
      rank += 1;
    }
    return rank;
  };

  // Сортировка имен в алфавитном порядке
  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  // Обновление похожих волшебников при изменении внешности волшебника пользователя
  var updateWizards = function () {
    window.renderWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  userWizard.coatChangeHandler = debounceModule(function (color) {
    coatColor = color;
    updateWizards();
  });

  userWizard.eyesChangeHandler = debounceModule(function (color) {
    eyesColor = color;
    updateWizards();
  });

  userWizard.fireballChangeHandler = debounceModule(function (color) {
    fireballColor = color;
    updateWizards();
  });

  // Обработчик успешной загрузки
  var loadHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  // Обработчик ошибки
  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red';
    node.style.position = 'absolute';
    node.style.left = '0';
    node.style.right = '0';
    node.style.fontZixe = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  // Отображение блока с похожими волшебниками
  var showSimilarSetup = function () {
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  // Точка входа в программу
  var init = function () {
    window.backend.load(loadHandler, errorHandler);
    showSimilarSetup();
  };
  init();
})();
