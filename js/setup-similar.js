'use strict';

(function () {
  var ALL_WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var ALL_WIZARD_SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];
  var NUMBER_OF_WIZARD = 4;
  var wizards = [];
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplateElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // Генерация объекта волшебника со случайными значениями свойств
  var createWizard = function (names, surnames, coat, eyes) {
    var randomWizard = {};
    var randomWizardName = names[window.util.getRandomNumber(names.length - 1)] + ' ' + surnames[window.util.getRandomNumber(surnames.length - 1)];
    var randomCoatColor = coat[window.util.getRandomNumber(coat.length - 1)];
    var randomEyesColor = eyes[window.util.getRandomNumber(eyes.length - 1)];
    randomWizard.name = randomWizardName;
    randomWizard.coatColor = randomCoatColor;
    randomWizard.eyesColor = randomEyesColor;
    return randomWizard;
  };

  // Создание массива с объектами волшебников
  var initWizards = function () {
    var newWizards = [];
    for (var i = 0; i < NUMBER_OF_WIZARD; i++) {
      newWizards[i] = createWizard(ALL_WIZARD_NAMES, ALL_WIZARD_SURNAMES, window.util.ALL_COAT_COLORS, window.util.ALL_EYES_COLORS);
    }
    return newWizards;
  };

  // Создание DOM-элемента на основе объекта волшебника
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplateElement.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  // Заполнение блока DOM-элементами на основе массива с объектами
  var fillBlock = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
      similarListElement.appendChild(fragment);
    }
  };

  // Отображение блока с похожими волшебниками
  var showSimilarSetup = function () {
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  // Точка входа в программу
  var init = function () {
    wizards = initWizards();
    fillBlock();
    showSimilarSetup();
  };
  init();
})();
