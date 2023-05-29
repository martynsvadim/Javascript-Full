const btnElems = document.querySelectorAll('.btn');

const handleClick = (event) => {
  console.log(event.target.textContent);
};

btnElems.forEach((elem) => elem.addEventListener('click', handleClick));
