const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, id) => {
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

// put your code here
const inputElem = document.querySelector('.task-input');
const inputTaskElem = document.querySelector('.task-input');
const createButtonElem = document.querySelector('.btn');

const addListItemElem = () => {
  if (inputElem.value === '') {
    return;
  }

  tasks.push({ text: inputElem.value, done: false });
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
  const taskDone = tasks[listItemDone.dataset.id];
  taskDone.done = event.target.checked;
  renderTasks(tasks);
};

listElem.addEventListener('click', changeDone);
renderTasks(tasks);
