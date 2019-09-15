const hiddenReviews = document.querySelectorAll('.review_hidden');
const reviewsButton = document.querySelector('.reviews__button-more');
const buttonText = reviewsButton.querySelector('.button-more__text');

buttonText.textContent = `Показать Все(${hiddenReviews.length})`;

module.exports.reviewsShow = function reviewsShow() {
  this.classList.add('button-more_hidden');
  hiddenReviews.forEach((review) => {
    review.classList.remove('review_hidden');
  });
};
