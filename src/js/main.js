//Default list items
let items = [
  {
    name: 'Vasyl',
    id: 5,
  },
  {
    name: 'Anna',
    id: 3,
  },
  {
    name: 'Mike',
    id: 8,
  },
  {
    name: 'Alex',
    id: 2,
  },
];

//Add new element to list
const addNewElement = () => {
  const name = document.querySelector('.nameInput').value;
  const id = document.querySelector('.idInput').value;
  const item = { name, id: +id };

  if (name === '' || id <= 0) { alert('Add some text please, and id > 0') }
  else {
    items.push(item);
    const newListItem = new ListItem(item);
    document.querySelector('.nameInput').value = '';
    document.querySelector('.idInput').value = '';
  }
}
//Remove element from list
const removeElement = (ul,li) => {
  li.classList.add('remove');
  setTimeout( () => ul.removeChild(li), 500);
}
//Checked element
const isChecked = (li) => li.classList.toggle('checked');

class App {

  constructor() {
    const container = document.querySelector('.container');

    const title = document.createElement('h1');
    const list = document.createElement('ul');
    const form = document.createElement('div');
    const nameInput = document.createElement('input');
    const idInput = document.createElement('input');
    const addBtn = document.createElement('button');
    const span = document.createElement('span');
    const sortContainer = document.createElement('div');
    const sortBtn = document.createElement('button');

    title.classList.add('title');
    list.classList.add('todo-list')
    form.classList.add('form');
    nameInput.classList.add('nameInput');
    idInput.classList.add('idInput');
    addBtn.classList.add('addBtn');
    sortContainer.classList.add('sortContainer');
    sortBtn.classList.add('sortBtn');

    nameInput.setAttribute('placeholder', 'Name');
    idInput.setAttribute('placeholder', 'Id');
    idInput.setAttribute('type', 'number');

    title.textContent = 'My list';
    addBtn.textContent = 'add';
    sortBtn.textContent = '*';
    span.textContent = '+';

    addBtn.addEventListener('click', addNewElement);

    form.appendChild(nameInput);
    form.appendChild(idInput);
    addBtn.appendChild(span);
    form.appendChild(addBtn);
    sortContainer.appendChild(sortBtn);
    container.appendChild(title);
    container.appendChild(form);
    container.appendChild(list);
    container.appendChild(sortContainer);
  }
}
const app = new App();

class ListItem {
  constructor (item) {
    const ul = document.querySelector('.todo-list');
    const li = document.createElement('li');
    const idBadge = document.createElement('span');
    const check = document.createElement('input');
    const checkLabel = document.createElement('label');
    const removeBtn = document.createElement('button');

    check.setAttribute('type', 'checkbox');
    check.setAttribute('name', 'check');
    checkLabel.setAttribute('for', 'check');

    li.classList.add('add');
    idBadge.classList.add('badge');
    check.classList.add('check');
    checkLabel.classList.add('checkLabel');
    removeBtn.classList.add('removeBtn');

    removeBtn.addEventListener('click', () => removeElement(ul,li) );
    check.addEventListener('click', () => isChecked(li) );

    li.textContent = item.name;
    idBadge.textContent = item.id;
    removeBtn.textContent = '\u00D7';

    li.appendChild(idBadge);
    li.appendChild(check);
    li.appendChild(checkLabel);
    li.appendChild(removeBtn);

    setTimeout( () => ul.appendChild(li), 180);
    setTimeout( () => li.removeAttribute('class', '.add'), 200);
  }
}

//Default list
(() => {
  for (let i = 0; i < items.length; i++) {
    const defaultListItem = new ListItem(items[i]);
  }
})();


const sortById = () => {
  const li = document.querySelectorAll('li');

  for (var i = 0; i < li.length; i++) {
    li[i].style.order = items[i].id;
  }
}

const sortBtn = document.querySelector('.sortBtn');
sortBtn.addEventListener('click', sortById);
