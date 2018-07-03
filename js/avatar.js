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
  var renderAvatar = function () {
    var avatar = avatarChooserElement.files[0];
    var matches = checkIfFileTypeIsCorrect(avatar);

    if (matches) {
      renderPreview(avatarPreviewElement, userPic, avatar);
    }
  };

  avatarChooserElement.addEventListener('change', function () {
    renderAvatar();
  });

})();
