const $ = require('jquery');
require('./maskedinput');
const { formatCardCode, formatCardDate, formatCardCVV } = require('./functions');

const orderForm = document.querySelector('.form.modal__form');
const { cardNumber, cardDate, cardCVV, tel } = orderForm;
const events = ['input', 'change', 'blur', 'keyup'];

events.forEach((event) => {
  cardNumber.addEventListener(event, formatCardCode, false);
  cardDate.addEventListener(event, formatCardDate, false);
  cardCVV.addEventListener(event, formatCardCVV, false);
});

$(tel).mask('+7 (999) 999-99-99');
