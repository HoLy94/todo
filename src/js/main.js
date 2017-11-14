// import items from './items';
// import app from './app/app';


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

  form.appendChild(nameInput);
  form.appendChild(id);
  addBtn.appendChild(span);
  form.appendChild(addBtn);
  container.appendChild(form);
  container.appendChild(list);
}
}
const app = new App();

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

const deleteElement = (li) => {
  let ul = document.querySelector('.todo-list');

  for (var i = 0; i < ul.childNodes.length; i++) {

    if (ul.childNodes[i] === li) {
      li.classList.add('remove');
      setTimeout( () => ul.removeChild( ul.childNodes[i] ), 500);
      items.splice(i,1);
      break;
    }
  }
}

const render = (item) => {
  let ul = document.querySelector('.todo-list');
  let li = document.createElement('li');
  let idBadge = document.createElement('span');
  let check = document.createElement('input');
  let checkLabel = document.createElement('label');
  let deleteBtn = document.createElement('button');

  check.setAttribute('type', 'checkbox');
  check.setAttribute('name', 'check');
  checkLabel.setAttribute('for', 'check');

  li.classList.add('add');
  idBadge.classList.add('badge');
  check.classList.add('check');
  checkLabel.classList.add('checkLabel');
  deleteBtn.classList.add('deleteBtn');

  deleteBtn.addEventListener('click', () => deleteElement(li) );

  li.textContent = `${item.name}`;
  idBadge.textContent = `${item.id}`;
  deleteBtn.textContent = '\u00D7';

  li.appendChild(idBadge);
  li.appendChild(check);
  li.appendChild(checkLabel);
  li.appendChild(deleteBtn);
  setTimeout( () => ul.appendChild(li), 180);
  setTimeout( () => li.removeAttribute('class', '.add'), 200);
}

const defaultElements = () => {
  for (let i = 0; i < items.length; i++) {
    render(items[i]);
  }
}

defaultElements();

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

let addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', addNewElement);

setTimeout( () => {
  let li = document.querySelectorAll('li');
  let check = document.querySelectorAll('.check');
  const isChecked = (li) => li.classList.toggle('checked');

  check[0].addEventListener('click', function() {isChecked(li[0])} );
  check[1].addEventListener('click', function() {isChecked(li[1])} );
  check[2].addEventListener('click', function() {isChecked(li[2])} );
  check[3].addEventListener('click', function() {isChecked(li[3])} );
}, 500);
