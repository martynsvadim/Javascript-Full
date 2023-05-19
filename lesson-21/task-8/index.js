export const createButton = (buttonText) => {
  const bodyElem = document.body;
  const buttonElem = document.createElement('button');
  buttonElem.textContent = buttonText;
  bodyElem.append(buttonElem);
};
