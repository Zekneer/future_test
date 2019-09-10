// Third party libraries
require('@babel/polyfill');

// Click handlers
const videoHandler = require('./handlers/video');

document.addEventListener('click', (event) => {
  const handlerTarget = event.target.closest('.video__click');
  if (handlerTarget) {
    return videoHandler.call(handlerTarget, event);
  }
});
