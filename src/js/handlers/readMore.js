module.exports.readMore = function readMore() {
  const article = this.closest('.about__article');
  const hiddenText = article.querySelectorAll('.about__text_hidden');
  hiddenText.forEach((hiddenItem) => {
    hiddenItem.style.display = 'inline';
  });
  this.classList.add('button-more_hidden');
};
