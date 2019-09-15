// Сторонние библиотеки
require('@babel/polyfill');

// Мои модули
// Полифилы
require('./modules/polyfills/index');
// Слайдер фото для маленьких экранов
require('./modules/slider/index');
// Календарь для поля ввода даты
require('./modules/date/index');
// Авторедактирование ввода карты и телефона
require('./modules/autoedit/index');
// Проверка сабмита
require('./handlers/submit');

// Глобальный обработчик кликов
const { videoHandler } = require('./handlers/video');
const { prevHandler, nextHandler } = require('./handlers/slides');
const { modalShow, modalHide } = require('./handlers/modal');
const { reviewsShow } = require('./handlers/reviews');
const { photoShow } = require('./handlers/photo');
const { readMore } = require('./handlers/readMore');

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

  handlerTarget = event.target.closest('.modal__close-button') || event.target.closest('.modal');
  if (handlerTarget) {
    return modalHide.call(handlerTarget, event);
  }

  handlerTarget = event.target.closest('.reviews__button-more');
  if (handlerTarget) {
    return reviewsShow.call(handlerTarget, event);
  }

  handlerTarget = event.target.closest('.photo__button-more');
  if (handlerTarget) {
    return photoShow.call(handlerTarget, event);
  }

  handlerTarget = event.target.closest('.about__read-more');
  if (handlerTarget) {
    return readMore.call(handlerTarget, event);
  }
});
