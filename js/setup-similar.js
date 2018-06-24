'use strict';

(function () {
  var NUMBER_OF_WIZARD = 4;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplateElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // Создание DOM-элемента на основе объекта волшебника
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplateElement.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  // Обработчик успешной загрузки
  var loadHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    wizards = window.util.shuffleArray(wizards);
    for (var i = 0; i < NUMBER_OF_WIZARD; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
      similarListElement.appendChild(fragment);
    }
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
