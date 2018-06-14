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

var ALL_FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var NUMBER_OF_WIZARD = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var userDialogElement = document.querySelector('.setup');
var wizards = [];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplateElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var popupOpenElement = document.querySelector('.setup-open');
var popupCloseElement = userDialogElement.querySelector('.setup-close');
var userNameInputElement = userDialogElement.querySelector('.setup-user-name');
var playerWizardElement = userDialogElement.querySelector('.setup-wizard');
var playerWizardCoatElement = playerWizardElement.querySelector('.wizard-coat');
var playerWizardEyesElement = playerWizardElement.querySelector('.wizard-eyes');
var playerWizardFireballElement = userDialogElement.querySelector('.setup-fireball-wrap');
var coatColorElement = userDialogElement.querySelector('input[name="coat-color"]');
var eyesColorElement = userDialogElement.querySelector('input[name="eyes-color"]');
var fireballColorElement = userDialogElement.querySelector('input[name="fireball-color"]');

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

var popupEscPressHandler = function (evt) {
  if (userNameInputElement === document.activeElement) {
    evt.stopPropagation();
  } else {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
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
  document.removeEventListener('keydown', popupEscPressHandler);
};

popupOpenElement.addEventListener('click', function () {
  openPopup();
});

popupOpenElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

popupCloseElement.addEventListener('click', function () {
  closePopup();
});

popupCloseElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInputElement.addEventListener('invalid', function () {
  if (userNameInputElement.validity.tooShort) {
    userNameInputElement.setCustomValidity('Придумайте имя подлиннее! Хотя бы 2 символа :-)');
  } else if (userNameInputElement.validity.tooLong) {
    userNameInputElement.setCustomValidity('Это будет сложно произнести!');
  } else if (userNameInputElement.validity.valueMissing) {
    userNameInputElement.setCustomValidity('Ну надо же его как-то называть!');
  } else {
    userNameInputElement.setCustomValidity('');
  }
});

userNameInputElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.preventDefault();
  }
});

// Изменение цвета элементов персонажа
var changeSettings = function (wizardPart, colorsList, inputHidden) {
  var currentNumber = colorsList.indexOf(inputHidden.value);
  if (currentNumber === colorsList.length - 1) {
    currentNumber = -1;
  }
  ++currentNumber;
  if (wizardPart.tagName === 'use') {
    wizardPart.style.fill = colorsList[currentNumber];
  } else {
    wizardPart.style.backgroundColor = colorsList[currentNumber];
  }
  inputHidden.value = colorsList[currentNumber];
};

playerWizardCoatElement.addEventListener('click', function () {
  changeSettings(playerWizardCoatElement, ALL_COAT_COLORS, coatColorElement);
});

playerWizardEyesElement.addEventListener('click', function () {
  changeSettings(playerWizardEyesElement, ALL_EYES_COLORS, eyesColorElement);
});

playerWizardFireballElement.addEventListener('click', function () {
  changeSettings(playerWizardFireballElement, ALL_FIREBALL_COLORS, fireballColorElement);
});
