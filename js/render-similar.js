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

  // Отрисовка похожих волшебников
  window.renderWizards = function (wizards) {
    var takeNumber = wizards.length > NUMBER_OF_WIZARD ? NUMBER_OF_WIZARD : wizards.length;
    similarListElement.innerHTML = '';
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
      similarListElement.appendChild(fragment);
    }
  };
})();
