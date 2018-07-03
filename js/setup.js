'use strict';

(function () {
  var wizard = {
    coatChangeHandler: function (color) {
      return color;
    },
    eyesChangeHandler: function (color) {
      return color;
    },
    fireballChangeHandler: function (color) {
      return color;
    }
  };

  var utilModule = window.util;
  var changeColorModule = window.changeColor;
  var userDialogElement = window.elements.userDialog;
  var playerWizardElement = userDialogElement.querySelector('.setup-wizard');
  var playerWizardCoatElement = playerWizardElement.querySelector('.wizard-coat');
  var playerWizardEyesElement = playerWizardElement.querySelector('.wizard-eyes');
  var playerWizardFireballElement = userDialogElement.querySelector('.setup-fireball-wrap');
  var coatColorElement = userDialogElement.querySelector('input[name="coat-color"]');
  var eyesColorElement = userDialogElement.querySelector('input[name="eyes-color"]');
  var fireballColorElement = userDialogElement.querySelector('input[name="fireball-color"]');

  playerWizardCoatElement.addEventListener('click', function () {
    changeColorModule(playerWizardCoatElement, utilModule.ALL_COAT_COLORS, coatColorElement);
    wizard.coatChangeHandler(coatColorElement.value);
  });

  playerWizardEyesElement.addEventListener('click', function () {
    changeColorModule(playerWizardEyesElement, utilModule.ALL_EYES_COLORS, eyesColorElement);
    wizard.eyesChangeHandler(eyesColorElement.value);
  });

  playerWizardFireballElement.addEventListener('click', function () {
    changeColorModule(playerWizardFireballElement, utilModule.ALL_FIREBALL_COLORS, fireballColorElement);
    wizard.fireballChangeHandler(fireballColorElement.value);
  });

  window.setup = wizard;
})();
