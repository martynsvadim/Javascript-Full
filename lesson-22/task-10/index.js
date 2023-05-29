const btnElems = document.querySelectorAll('.pagination__page');

const handleClick = (event) => {
  console.log(event.target.dataset.pageNumber);
};

btnElems.forEach((elem) => {
  elem.addEventListener('click', handleClick);
});
