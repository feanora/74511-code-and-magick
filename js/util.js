'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
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

  window.util = {
    ALL_COAT_COLORS: ALL_COAT_COLORS,
    ALL_EYES_COLORS: ALL_EYES_COLORS,
    ALL_FIREBALL_COLORS: ALL_FIREBALL_COLORS,

    performActionIfEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },

    performActionIfEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },

    getRandomNumber: function (max) {
      return Math.round(Math.random() * max);
    },

    getMaxElement: function (arr) {
      var maxElement = arr[0];
      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
      return maxElement;
    },

    shuffleArray: function (array) {
      var newArray = array.slice();
      for (var i = newArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var swap = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = swap;
      }
      return newArray;
    }
  };
})();
