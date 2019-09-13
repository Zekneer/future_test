// Third party libraries
require('@babel/polyfill');
var $ = require('jquery');
require('./thirdPartyModules/datetimepicker');

// My modules
require('./modules/slider/index');

// Click handlers
const videoHandler = require('./handlers/video');
const { prevHandler, nextHandler } = require('./handlers/slides');
const { modalShow, modalHide } = require('./handlers/modal');

document.addEventListener('click', (event) => {
  let handlerTarget = event.target.closest('.video__click');
  if (handlerTarget) {
    return videoHandler.call(handlerTarget, event);
  }

  handlerTarget = event.target.closest('.meeting-info__slider-prev');
  if (handlerTarget) {
    return prevHandler.call(handlerTarget, event);
  }

  handlerTarget = event.target.closest('.meeting-info__slider-next');
  if (handlerTarget) {
    return nextHandler.call(handlerTarget, event);
  }

  handlerTarget = event.target.closest('.hero__button') || event.target.closest('.booking__button');
  if (handlerTarget) {
    return modalShow.call(handlerTarget, event);
  }

  handlerTarget = event.target.closest('.modal');
  if (handlerTarget) {
    return modalHide.call(handlerTarget, event);
  }
});

$.datetimepicker.setLocale('ru');
$('#datetimepicker').datetimepicker({
  timepicker: false,
  format: 'd.m.Y',
});
