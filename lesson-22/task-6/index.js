const btnElem = document.querySelector('.single-use-btn');
const func = () => {
  console.log('clicked');
};

btnElem.addEventListener('click', func);
btnElem.addEventListener('click', () => {
  btnElem.removeEventListener('click', func);
});
