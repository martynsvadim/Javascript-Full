export const getTitleElement = () => {
  const titleElement = document.querySelector('.title');
  console.dir(titleElement);
  return titleElement;
};

export const getInputElement = () => {
  const inputElem = document.querySelector('input[type="text"]');
  console.dir(inputElem);
  return inputElem;
};
