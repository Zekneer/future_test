function verifyDate(date) {
  return date.match(/^\d{2}\.\d{2}\.\d{4}$/);
}

function verifyEmail(email) {
  return email.match(/.+@.+\..+/i);
}

function verifyName(name) {
  return name.length;
}

function verifySurname(surname) {
  return surname.length;
}

function verifyTel(tel) {
  return tel.length;
}

function verifyCardNumber(cardNumber) {
  return cardNumber.match(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/);
}

function verifyCardDate(cardDate) {
  return cardDate.match(/^(0[1-9])|(1[0-2])\/(19)|([2-3][0-9])$/);
}

function verifyCardCVV(cardCVV) {
  return cardCVV.match(/^\d{3}$/);
}

const form = document.querySelector('.form.modal__form');
const { date, email, name, surname, tel, cardNumber, cardDate, cardCVV, publicCheck } = form;

function submit(event) {
  event.preventDefault();
  const errorItems = form.querySelectorAll('.form__group_error');
  errorItems.forEach((errorItem) => {
    errorItem.classList.remove('form__group_error');
  });
  const errors = [];

  if (!verifyDate(date.value)) errors.push(date);
  if (!verifyEmail(email.value)) errors.push(email);
  if (!verifyName(name.value)) errors.push(name);
  if (!verifySurname(surname.value)) errors.push(surname);
  if (!verifyTel(tel.value)) errors.push(tel);
  if (!verifyCardNumber(cardNumber.value)) errors.push(cardNumber);
  if (!verifyCardDate(cardDate.value)) errors.push(cardDate);
  if (!verifyCardCVV(cardCVV.value)) errors.push(cardCVV);
  if (!publicCheck.checked) errors.push(publicCheck);

  if (!errors.length) {
    form.submit();
  } else {
    errors.forEach((input) => {
      const formGroup = input.closest('.form__group');
      formGroup.classList.add('form__group_error');
    });
  }
}

form.addEventListener('submit', submit);
