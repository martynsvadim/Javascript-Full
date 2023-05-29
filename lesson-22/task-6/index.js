const btnElem = document.querySelector('.single-use-btn');
const func = () => {
  console.log('clicked');
};

btnElem.addEventListener('click', func, { once: true });
