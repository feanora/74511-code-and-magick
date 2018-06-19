'use strict';

(function () {
  window.changeColor = function (element, colorsList, inputHidden) {
    var currentNumber = colorsList.indexOf(inputHidden.value);
    if (currentNumber === colorsList.length - 1) {
      currentNumber = -1;
    }
    ++currentNumber;
    if (element.tagName === 'use') {
      element.style.fill = colorsList[currentNumber];
    } else {
      element.style.backgroundColor = colorsList[currentNumber];
    }
    inputHidden.value = colorsList[currentNumber];
  };
})();
