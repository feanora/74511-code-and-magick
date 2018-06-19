'use strict';

var playerWizardElement = window.elements.userDialogElement.querySelector('.setup-wizard');
var playerWizardCoatElement = playerWizardElement.querySelector('.wizard-coat');
var playerWizardEyesElement = playerWizardElement.querySelector('.wizard-eyes');
var playerWizardFireballElement = window.elements.userDialogElement.querySelector('.setup-fireball-wrap');
var coatColorElement = window.elements.userDialogElement.querySelector('input[name="coat-color"]');
var eyesColorElement = window.elements.userDialogElement.querySelector('input[name="eyes-color"]');
var fireballColorElement = window.elements.userDialogElement.querySelector('input[name="fireball-color"]');

playerWizardCoatElement.addEventListener('click', function () {
  window.changeColor(playerWizardCoatElement, window.util.ALL_COAT_COLORS, coatColorElement);
});

playerWizardEyesElement.addEventListener('click', function () {
  window.changeColor(playerWizardEyesElement, window.util.ALL_EYES_COLORS, eyesColorElement);
});

playerWizardFireballElement.addEventListener('click', function () {
  window.changeColor(playerWizardFireballElement, window.util.ALL_FIREBALL_COLORS, fireballColorElement);
});
