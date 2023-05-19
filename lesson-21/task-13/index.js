export const getSection = (num) => {
  const spanElem = document.querySelector(
    `span[data-number = "${String(num)}"]`
  );
  return spanElem.parentElement.dataset.section;
};
