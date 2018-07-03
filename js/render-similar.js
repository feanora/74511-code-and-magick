'use strict';

(function () {
  var NUMBER_OF_WIZARD = 4;

  var artifactsMap = {
    'balloon': 'воздушный шарик',
    'wings': 'крылья',
    'triple_fireballs': 'три файербола',
    'smaller_fireballs': 'маленькие файерболы',
    'bigger_fireballs': 'огромные файерболы',
    'metal_boots': 'металлические сапоги',
    'weights': 'утяжелители на ноги',
    'converse': 'кеды "Конверс"',
    'flying_boots': 'летающие сапоги'
  };

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplateElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  // Создание DOM-элемента на основе объекта волшебника
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplateElement.cloneNode(true);
    var wizardPopupElement = wizardElement.querySelector('.setup-similar-pupup');
    var inventoryElement = wizardPopupElement.querySelector('.setup-similar-inventory');
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    var artifactsList = getArtifacts(wizard);
    inventoryElement.textContent = artifactsList;
    wizardElement.addEventListener('mouseover', function () {
      showPopup(wizardPopupElement);
    });
    wizardElement.addEventListener('mouseout', function () {
      hidePopup(wizardPopupElement);
    });
    return wizardElement;
  };

  // Получение списка артефактов
  var getArtifacts = function (wizard) {
    return wizard.artifacts.map(function (it) {
      return artifactsMap[it.name];
    }).join(',' + '\n');
  };

  // Показ инвентаря
  var showPopup = function (popup) {
    popup.classList.remove('hidden');
  };

  // Скрытие инвентаря
  var hidePopup = function (popup) {
    popup.classList.add('hidden');
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
