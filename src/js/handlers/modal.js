// const modalContent = document.querySelector('.modal__content');
// modalContent.addEventListener('click', (event) => {
//   event.preventDefault();
// });

module.exports.modalShow = function modalShow() {
  document.querySelector('.modal').classList.remove('modal_hidden');
};

module.exports.modalHide = function modalHide(event) {
  if (event.target !== this) return;
  document.querySelector('.modal').classList.add('modal_hidden');
};
