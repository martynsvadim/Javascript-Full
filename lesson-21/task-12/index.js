export const squaredNumbers = () => {
  const liElem = document.querySelectorAll('.number');
  [...liElem].map((elem) => {
    const value = elem.dataset.number;
    elem.dataset.squaredNumber = value * value;
  });
};
