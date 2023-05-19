'use strict';

export const getTitle = () => {
  const titleElem = document.querySelector('.title');
  return titleElem.textContent;
};

export const getDescription = () => {
  const descrElem = document.querySelector('.about');
  return descrElem.innerText;
};

export const getPlans = () => {
  const plansElem = document.querySelector('.plans');
  return plansElem.innerHTML;
};

export const getGoals = () => {
  const goalElem = document.querySelector('.goal');
  return goalElem.outerHTML;
};
