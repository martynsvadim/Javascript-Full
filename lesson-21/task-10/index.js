export const finishForm = () => {
  const formElem = document.querySelector('.login-form');
  const loginInput = document.createElement('input');
  loginInput.setAttribute('name', 'login');
  const lastChildForm = formElem.lastElementChild;
  lastChildForm.setAttribute('type', 'password');
  formElem.prepend(loginInput);
};

finishForm();
