'use strict';
(function () {
  var dialogHandlerElement = window.elements.userDialogElement.querySelector('.upload');

  dialogHandlerElement.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;
    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      window.elements.userDialogElement.style.top = (window.elements.userDialogElement.offsetTop - shift.y) + 'px';
      window.elements.userDialogElement.style.left = (window.elements.userDialogElement.offsetLeft - shift.x) + 'px';
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      if (dragged) {
        var clickPreventDefaultHandler = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandlerElement.removeEventListener('click', clickPreventDefaultHandler);
        };
        dialogHandlerElement.addEventListener('click', clickPreventDefaultHandler);
      }
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });
})();
