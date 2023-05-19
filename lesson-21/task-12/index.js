export const squaredNumbers = () => {
  const liElemOne = document.querySelector('.number');
  const liElemTwo = liElemOne.nextElementSibling;
  const liElemThree = liElemTwo.nextElementSibling;
  const valueOne = liElemOne.dataset.number;
  const valueTwo = liElemTwo.dataset.number;
  const valueThree = liElemThree.dataset.number;
  liElemOne.dataset.squared_number = valueOne * valueOne;
  liElemTwo.dataset.squared_number = valueTwo * valueTwo;
  liElemThree.dataset.squared_number = valueThree * valueThree;
};
