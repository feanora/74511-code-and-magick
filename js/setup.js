'use strict';

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

var ALL_COAT_COLORS = [
  'rgb(241, 43, 107)',
  'rgb(101, 137, 164)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var ALL_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var NUMBER_OF_WIZARD = 4;
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var wizards = [];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// Генерация случайного числа от 0 до max
var getRandomNumber = function (max) {
  return Math.round(Math.random() * max);
};

// Генерация объекта волшебника со случайными значениями свойств
var createWizard = function (names, surnames, coat, eyes) {
  var randomWizard = {};
  var randomWizardName = names[getRandomNumber(names.length - 1)] + ' ' + surnames[getRandomNumber(surnames.length - 1)];
  var randomCoatColor = coat[getRandomNumber(coat.length - 1)];
  var randomEyesColor = eyes[getRandomNumber(eyes.length - 1)];
  randomWizard.name = randomWizardName;
  randomWizard.coatColor = randomCoatColor;
  randomWizard.eyesColor = randomEyesColor;
  return randomWizard;
};

// Создание массива с объектами волшебников
var initWizards = function () {
  var newWizards = [];
  for (var i = 0; i < NUMBER_OF_WIZARD; i++) {
    newWizards[i] = createWizard(ALL_WIZARD_NAMES, ALL_WIZARD_SURNAMES, ALL_COAT_COLORS, ALL_EYES_COLORS);
  }
  return newWizards;
};

// Создание DOM-элемента на основе объекта волшебника
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
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
