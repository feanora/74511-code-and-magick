'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function (ctx, x, y, color) {
  var cloudPartX = CLOUD_WIDTH / 4;
  var cloudPartY = CLOUD_HEIGHT / 2;
  var cloudShiftX = 20;
  var cloudShiftY = 10;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + cloudPartX, y + cloudShiftY);
  ctx.lineTo(x + 2 * cloudPartX, y);
  ctx.lineTo(x + 3 * cloudPartX, y + cloudShiftY);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH - cloudShiftX, y + cloudPartY);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x + 3 * cloudPartX, y + CLOUD_HEIGHT - cloudShiftY);
  ctx.lineTo(x + 2 * cloudPartX, y + CLOUD_HEIGHT);
  ctx.lineTo(x + cloudPartX, y + CLOUD_HEIGHT - cloudShiftY);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x + cloudShiftX, y + cloudPartY);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'handing';
  ctx.fillText('Ура, вы победили!', 140, 40);
  ctx.fillText('Список результатов:', 140, 60);
};
