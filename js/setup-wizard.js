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

  var playerWizardElement = window.elements.userDialogElement.querySelector('.setup-wizard');
  var playerWizardCoatElement = playerWizardElement.querySelector('.wizard-coat');
  var playerWizardEyesElement = playerWizardElement.querySelector('.wizard-eyes');
  var playerWizardFireballElement = window.elements.userDialogElement.querySelector('.setup-fireball-wrap');
  var coatColorElement = window.elements.userDialogElement.querySelector('input[name="coat-color"]');
  var eyesColorElement = window.elements.userDialogElement.querySelector('input[name="eyes-color"]');
  var fireballColorElement = window.elements.userDialogElement.querySelector('input[name="fireball-color"]');

  playerWizardCoatElement.addEventListener('click', function () {
    window.changeColor(playerWizardCoatElement, window.util.ALL_COAT_COLORS, coatColorElement);
    wizard.coatChangeHandler(coatColorElement.value);
  });

  playerWizardEyesElement.addEventListener('click', function () {
    window.changeColor(playerWizardEyesElement, window.util.ALL_EYES_COLORS, eyesColorElement);
    wizard.eyesChangeHandler(eyesColorElement.value);
  });

  playerWizardFireballElement.addEventListener('click', function () {
    window.changeColor(playerWizardFireballElement, window.util.ALL_FIREBALL_COLORS, fireballColorElement);
    wizard.fireballChangeHandler(fireballColorElement.value);
  });

  window.wizard = wizard;
})();