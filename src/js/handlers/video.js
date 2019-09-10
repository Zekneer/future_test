// Обработчик кликов по видео блокам
module.exports = function videoHandler() {
  const iframe = this.nextElementSibling;
  if (!iframe || !iframe.dataset.src) return;
  this.classList.add('video__click_hidden');
  iframe.classList.remove('video__youtube_hidden');
  iframe.src = iframe.dataset.src;
};
