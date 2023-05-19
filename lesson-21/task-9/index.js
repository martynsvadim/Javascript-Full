export const finishList = () => {
  const listElem = document.querySelector('.list');
  const elemSpecial = document.querySelector('.special');
  const elemEight = document.createElement('li');
  elemEight.textContent = '8';
  listElem.append(elemEight);
  const elemOne = document.createElement('li');
  elemOne.textContent = '1';
  listElem.prepend(elemOne);
  const elemFour = document.createElement('li');
  elemFour.textContent = '4';
  elemSpecial.before(elemFour);
  const elemSix = document.createElement('li');
  elemSix.textContent = '6';
  elemSpecial.after(elemSix);
};
