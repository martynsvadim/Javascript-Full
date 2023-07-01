const tasks = [
  { text: 'Buy milk', done: false, id: Math.random() },
  { text: 'Pick up Tom from airport', done: false, id: Math.random() },
  { text: 'Visit party', done: false, id: Math.random() },
  { text: 'Visit doctor', done: true, id: Math.random() },
  { text: 'Buy meat', done: true, id: Math.random() },
];

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};
// renderTasks(tasks);
// console.log(tasks);

// put your code here
const inputElem = document.querySelector('.task-input');
const inputTaskElem = document.querySelector('.task-input');
const createButtonElem = document.querySelector('.btn');

const addListItemElem = () => {
  if (inputElem.value === '') {
    return;
  }

  tasks.push({ text: inputElem.value, done: false, id: Math.random() });
  inputTaskElem.value = '';
  renderTasks(tasks);
};

createButtonElem.addEventListener('click', addListItemElem);

const changeDone = (event) => {
  const checkboxElem = event.target.classList.contains('list__item-checkbox');

  if (!checkboxElem) {
    return;
  }

  const listItemDone = event.target.closest('.list__item-checkbox');
  const taskDone = tasks.find((elem) => elem.id === listItemDone.dataset.id);
  taskDone.done = event.target.checked;
  renderTasks(tasks);
};

listElem.addEventListener('click', changeDone);
renderTasks(tasks);
