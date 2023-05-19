export const manageClasses = () => {
  const liItemOne = document.querySelector('.one');
  liItemOne.classList.add('selected');
  const liItemTwo = document.querySelector('.two');
  liItemTwo.classList.remove('selected');
  const liItemThree = document.querySelector('.three');
  liItemThree.classList.toggle('three_done');
  const liItemFour = document.querySelector('.four');
  if (liItemFour.classList.contains('some-class')) {
    liItemFour.classList.add('another-class');
  }
};
