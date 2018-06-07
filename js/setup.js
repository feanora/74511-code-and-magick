'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var allWizardNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var allWizardSurnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var allCoatColors = [
  'rgb(241, 43, 107)',
  'rgb(101, 137, 164)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var allEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

// Генерация объекта волшебника со случайными значениями свойств
var createWizard = function (names, surnames, coat, eyes) {
  var randomWizardName = names[Math.round(Math.random() * (names.length - 1))] + ' ' + surnames[Math.round(Math.random() * (surnames.length - 1))];
  var randomCoatColor = coat[Math.round(Math.random() * (coat.length - 1))];
  var randomEyesColor = eyes[Math.round(Math.random() * (eyes.length - 1))];
  var randomWizard = {};
  randomWizard.name = randomWizardName;
  randomWizard.coatColor = randomCoatColor;
  randomWizard.eyesColor = randomEyesColor;
  return randomWizard;
};

// Создание массива с объектами волшебников
var numberOfWizard = 4;
var wizards = [];
var createWizards = function () {
  for (var i = 0; i < numberOfWizard; i++) {
    wizards[i] = createWizard(allWizardNames, allWizardSurnames, allCoatColors, allEyesColors);
  }
  return wizards;
};

createWizards();
