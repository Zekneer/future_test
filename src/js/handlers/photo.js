module.exports.photoShow = function photoShow() {
  const hiddenPhotos = document.querySelectorAll('.photo__photo-item_hidden');
  hiddenPhotos.forEach((photo) => {
    photo.classList.remove('photo__photo-item_hidden');
  });
  this.classList.add('button-more_hidden');
};
