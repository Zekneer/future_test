// Обработчик кликов по видео блокам
let left = 0;
const leftShift = 275;
const dots = {
  0: 0,
  '-275': 1,
  '-550': 2,
};
let currentDotId = 0;
const list = document.querySelector('.meeting-info__list');
const dotsContainer = document.querySelector('.meeting-info__slider-dots');
function dotPaint(position) {
  const dotId = dots[position];
  dotsContainer.children[currentDotId].classList.remove('meeting-info__slider-dot_check');
  dotsContainer.children[dotId].classList.add('meeting-info__slider-dot_check');
  currentDotId = dotId;
}

let windowWidth = document.documentElement.clientWidth;
let moreMobileL = windowWidth > 425;

window.addEventListener('resize', () => {
  windowWidth = document.documentElement.clientWidth;
  if (windowWidth > 425 && moreMobileL) return;
  if (windowWidth < 425 && !moreMobileL) return;
  if (windowWidth > 425) {
    moreMobileL = true;
    list.style.left = '0px';
    left = 0;
    dotPaint(left);
  } else {
    moreMobileL = false;
  }
});

module.exports.prevHandler = function prevHandler() {
  left += leftShift;
  if (left > 0) {
    left = -550;
  }
  dotPaint(left);
  list.style.left = `${left}px`;
};

module.exports.nextHandler = function nextHandler() {
  left -= leftShift;
  if (left < -550) {
    left = 0;
  }
  dotPaint(left);
  list.style.left = `${left}px`;
};
