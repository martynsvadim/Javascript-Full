export const setButton = (buttonText) => {
  buttonText = 'button text';
  const elem = document.body;
  elem.innerHTML = `<button>${buttonText}</button>`;
};
