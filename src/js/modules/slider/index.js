const { calcElemWidth, calcElemMarginLeft } = require('./functions');

const container = document.querySelector('.photo__photos-container');
const containerWidth = calcElemWidth(container);
let windowWidth = document.documentElement.clientWidth;
let currentCoords = 0;
let moreTablet = windowWidth > 768;

window.addEventListener('resize', () => {
  windowWidth = document.documentElement.clientWidth;
  if (windowWidth > 768 && moreTablet) return;
  if (windowWidth < 768 && !moreTablet) return;
  if (windowWidth > 768) {
    moreTablet = true;
    container.style.marginLeft = '';
  } else {
    moreTablet = false;
  }
});

function dragStart(event) {
  event = event || window.event;
  event.preventDefault();
  if (event.type === 'touchstart') {
    currentCoords = event.touches[0].clientX;
  } else {
    currentCoords = event.clientX;
    document.onmousemove = dragMove;
    document.onmouseup = dragEnd;
  }
}

function dragMove(event) {
  if (moreTablet) return;
  let newCoords;
  if (event.type === 'touchmove') {
    newCoords = event.touches[0].clientX;
  } else {
    newCoords = event.clientX;
  }
  const maxMarginLeft = windowWidth - containerWidth;
  const containerMarginLeft = calcElemMarginLeft(container);
  const moveRange = newCoords - currentCoords;
  const newMarginLeft = containerMarginLeft + moveRange;

  if (newMarginLeft > maxMarginLeft && newMarginLeft <= 0) {
    container.style.marginLeft = `${newMarginLeft}px`;
  }
  currentCoords = newCoords;
}

function dragEnd() {
  document.onmousemove = null;
}

container.addEventListener('touchstart', dragStart);
container.addEventListener('touchmove', dragMove);
container.addEventListener('mousedown', dragStart);
