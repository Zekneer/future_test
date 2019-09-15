function formatCardCode() {
  let cardNumber = this.value.replace(/[^\d]/g, '').substring(0, 16);
  cardNumber = cardNumber !== '' ? cardNumber.match(/.{1,4}/g).join(' ') : '';
  this.value = cardNumber;
}

function formatCardDate() {
  let cardDate = this.value.replace(/[^\d]/g, '').substring(0, 4);
  cardDate = cardDate !== '' ? cardDate.match(/.{1,2}/g).join('/') : '';
  this.value = cardDate;
}

function formatCardCVV() {
  let cardCVV = this.value.replace(/[^\d]/g, '').substring(0, 3);
  cardCVV = cardCVV !== '' ? cardCVV.match(/.{1}/g).join('') : '';
  this.value = cardCVV;
}

module.exports.formatCardCode = formatCardCode;
module.exports.formatCardDate = formatCardDate;
module.exports.formatCardCVV = formatCardCVV;
