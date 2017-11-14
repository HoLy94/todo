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
  }
];

//Add new element to list
const addNewElement = () => {
  let name = document.querySelector('.nameInput').value;
  let id = document.querySelector('.idInput').value;
  let item = { name: name, id: +id };

  if (name === '' || id <= 0) { alert('Add some text please, and id > 0') }
  else {
    items.push(item);
    render(item);
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
  let container = document.querySelector('.container');

  let list = document.createElement('ul');
  let form = document.createElement('div');
  let nameInput = document.createElement('input');
  let id = document.createElement('input');
  let addBtn = document.createElement('button');
  let span = document.createElement('span');

  list.classList.add('todo-list')
  form.classList.add('form');
  nameInput.classList.add('nameInput');
  id.classList.add('idInput');
  addBtn.classList.add('addBtn');

  id.setAttribute('type', 'number');

  addBtn.textContent = 'add';
  span.textContent = '+';

  addBtn.addEventListener('click', addNewElement);

  form.appendChild(nameInput);
  form.appendChild(id);
  addBtn.appendChild(span);
  form.appendChild(addBtn);
  container.appendChild(form);
  container.appendChild(list);
}
}
const app = new App();

const render = (item) => {
  let ul = document.querySelector('.todo-list');
  let li = document.createElement('li');
  let idBadge = document.createElement('span');
  let check = document.createElement('input');
  let checkLabel = document.createElement('label');
  let removeBtn = document.createElement('button');

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

//Default list
(() => {
  for (let i = 0; i < items.length; i++) {
    render(items[i]);
  }
})();
