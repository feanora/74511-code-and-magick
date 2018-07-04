'use strict';

(function () {
  var FILE_TYPES = [
    'gif',
    'jpg',
    'jpeg',
    'png'
  ];

  var elementsModule = window.elements;
  var userDialogElement = elementsModule.userDialog;
  var popupOpenElement = elementsModule.popupOpen;
  var userPic = popupOpenElement.querySelector('img');
  var avatarChooserElement = userDialogElement.querySelector('#avatar');
  var avatarPreviewElement = userDialogElement.querySelector('.setup-user-pic');
  var formElement = userDialogElement.querySelector('.setup-wizard-form');
  var uploadElement = formElement.querySelector('.upload');

  // Проверка расширения файла
  var checkIfFileTypeIsCorrect = function (file) {
    var fileName = file.name.toLowerCase();

    return FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });
  };

  // Загрузка и отображение файла
  var renderPreview = function (image, imageCopy, file) {
    var reader = new FileReader();

    reader.addEventListener('load', function () {
      image.src = reader.result;
      imageCopy.src = reader.result;
    });

    reader.readAsDataURL(file);
  };

  // Отображение аватара
  var renderAvatar = function (avatar) {
    var matches = checkIfFileTypeIsCorrect(avatar);

    if (matches) {
      renderPreview(avatarPreviewElement, userPic, avatar);
    }
  };

  var avatarChooserElementChangeHandler = function () {
    var selectedAvatar = avatarChooserElement.files[0];
    renderAvatar(selectedAvatar);
  };

  avatarChooserElement.addEventListener('change', avatarChooserElementChangeHandler);

  // Добравление подсветки области перетаскивания
  var addHighlight = function () {
    avatarPreviewElement.classList.add('highlight');
  };

  // Удаление подсветки области перетаскивания
  var removeHighlight = function () {
    avatarPreviewElement.classList.remove('highlight');
  };

  var uploadElementDragenterHandler = function (evt) {
    evt.preventDefault();
    addHighlight();
  };

  var uploadElementDragleaveHandler = function (evt) {
    evt.preventDefault();
    removeHighlight();
  };

  var uploadElementDragoverHandler = function (evt) {
    evt.preventDefault();
    addHighlight();
  };

  var uploadElementDropHandler = function (evt) {
    evt.preventDefault();
    removeHighlight();

    var data = evt.dataTransfer;
    var draggedAvatar = data.files[0];

    renderAvatar(draggedAvatar);
  };

  uploadElement.addEventListener('dragenter', uploadElementDragenterHandler, false);
  uploadElement.addEventListener('dragleave', uploadElementDragleaveHandler, false);
  uploadElement.addEventListener('dragover', uploadElementDragoverHandler, false);
  uploadElement.addEventListener('drop', uploadElementDropHandler, false);

  // Если сначала загрузить аватарку с помощью input[type="file"], а после этого попробовать загрузить перетаскиванием, то аватарка переташится, но будет ошибка в консоли, не понимаю, почему.
})();
