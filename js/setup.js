'use strict';

var playerWizardElement = window.elements.userDialogElement.querySelector('.setup-wizard');
var playerWizardCoatElement = playerWizardElement.querySelector('.wizard-coat');
var playerWizardEyesElement = playerWizardElement.querySelector('.wizard-eyes');
var playerWizardFireballElement = window.elements.userDialogElement.querySelector('.setup-fireball-wrap');
var coatColorElement = window.elements.userDialogElement.querySelector('input[name="coat-color"]');
var eyesColorElement = window.elements.userDialogElement.querySelector('input[name="eyes-color"]');
var fireballColorElement = window.elements.userDialogElement.querySelector('input[name="fireball-color"]');

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
  changeSettings(playerWizardCoatElement, window.util.ALL_COAT_COLORS, coatColorElement);
});

playerWizardEyesElement.addEventListener('click', function () {
  changeSettings(playerWizardEyesElement, window.util.ALL_EYES_COLORS, eyesColorElement);
});

playerWizardFireballElement.addEventListener('click', function () {
  changeSettings(playerWizardFireballElement, window.util.ALL_FIREBALL_COLORS, fireballColorElement);
});
