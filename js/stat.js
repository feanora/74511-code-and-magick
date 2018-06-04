'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHIFT_X = 20;
var CLOUD_SHIFT_Y = 10;
var GAP = 10;
var headerIndentX = CLOUD_SHIFT_X + GAP * 2;
var barIndentX = headerIndentX + GAP * 2;
var FONT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;

// Отрисовка облака
var renderCloud = function (ctx, x, y, color) {
  var cloudPartX = CLOUD_WIDTH / 4;
  var cloudPartY = CLOUD_HEIGHT / 2;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + cloudPartX, y + CLOUD_SHIFT_Y);
  ctx.lineTo(x + cloudPartX * 2, y);
  ctx.lineTo(x + cloudPartX * 3, y + CLOUD_SHIFT_Y);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH - CLOUD_SHIFT_X, y + cloudPartY);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x + cloudPartX * 3, y + CLOUD_HEIGHT - CLOUD_SHIFT_Y);
  ctx.lineTo(x + cloudPartX * 2, y + CLOUD_HEIGHT);
  ctx.lineTo(x + cloudPartX, y + CLOUD_HEIGHT - CLOUD_SHIFT_Y);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_SHIFT_X, y + cloudPartY);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
};

// Отрисовка сообщения на облаке
var renderStatHeader = function (ctx, textColor) {
  ctx.fillStyle = textColor;
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', CLOUD_X + headerIndentX, CLOUD_Y + CLOUD_SHIFT_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + headerIndentX, CLOUD_Y + CLOUD_SHIFT_Y + FONT_GAP + GAP);
};

// Получение случайного значения насыщенности
var getSaturation = function () {
  return Math.round(Math.random() * 100);
};

// Поиск максимального элемента массива
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

// Отрисовка диаграммы
var renderBarChart = function (ctx, names, times, textColor, myBarColor) {
  var headerHeight = CLOUD_Y + CLOUD_SHIFT_Y + FONT_GAP + GAP + FONT_GAP;
  var maxTime = Math.round(getMaxElement(times));

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = textColor;
    ctx.textBaseline = 'hanging';
    ctx.font = '16px PT Mono';
    ctx.fillText(names[i], CLOUD_X + barIndentX + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - CLOUD_SHIFT_Y - FONT_GAP);
    if (names[i] === 'Вы') {
      ctx.fillStyle = myBarColor;
    } else {
      ctx.fillStyle = 'hsl(240, ' + getSaturation() + '%, 50%)';
    }
    var barHeight = (Math.round(times[i]) * BAR_HEIGHT) / maxTime;
    ctx.fillRect(CLOUD_X + barIndentX + (BAR_WIDTH + BAR_GAP) * i, (headerHeight + GAP * 2) + (BAR_HEIGHT - barHeight), BAR_WIDTH, barHeight);
    ctx.fillStyle = textColor;
    ctx.fillText(Math.round(times[i]), CLOUD_X + barIndentX + (BAR_WIDTH + BAR_GAP) * i, headerHeight + (BAR_HEIGHT - barHeight));
  }
};

// Отрисовка статистики
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderStatHeader(ctx, '#000');
  renderBarChart(ctx, names, times, '#000', 'rgba(255, 0, 0, 1)');
};
