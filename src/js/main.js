// import items from './items';
// import app from './app/app';


const app = () => {
  let container = document.querySelector('.container');
  let list = document.createElement('ul');
  list.classList.add('todo-list')
  let form = document.createElement('div');
  form.classList.add('form');
  let name1 = document.createElement('input');
  name1.classList.add('name');
  let id = document.createElement('input');
  id.setAttribute('type', 'number');
  id.classList.add('id');
  let addBtn = document.createElement('button');
  addBtn.classList.add('addBtn');
  addBtn.textContent = 'add';
  let span = document.createElement('span');
  span.textContent = '+';
  form.appendChild(name1);
  form.appendChild(id);
  addBtn.appendChild(span);
  form.appendChild(addBtn);
  container.appendChild(form);
  container.appendChild(list);
}
app();

let items = [
  { name: 'Vasyl', id: 5 },
  { name: 'Anna', id: 3 },
  { name: 'Mike', id: 8 },
  { name: 'Alex', id: 2 }
];

const deleteElement = (li) => {
  let ul = document.querySelector('.todo-list');
  for (var i = 0; i < ul.childNodes.length; i++) {
    if (ul.childNodes[i] == li) {
      li.classList.add('remove');
      setTimeout(function(){ul.removeChild(ul.childNodes[i]);}, 500);
      items.splice(i,1);
      break;
    };
  };
};

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

  deleteBtn.addEventListener('click', function(){ deleteElement(li)});

  li.textContent = `${item.name}`;
  idBadge.textContent = `${item.id}`;
  deleteBtn.textContent = '\u00D7';

  li.appendChild(idBadge);
  li.appendChild(check);
  li.appendChild(checkLabel);
  li.appendChild(deleteBtn);
  setTimeout(function(){ ul.appendChild(li);}, 180);
  setTimeout(function(){ li.removeAttribute('class','.add');}, 200);
}

const defaultElements = () => {
  for (let i = 0; i < items.length; i++) {
    render(items[i]);
  };
};

defaultElements();

const addNewElement = () => {
  let name = document.querySelector('.name').value;
  let id = document.querySelector('.id').value;
  let item = { name: name, id: +id };

  if (name === '' || id <= 0) {
    alert('Add some text please, and id > 0')
  } else {
    items.push(item);
    render(item);
    document.querySelector('.name').value = '';
    document.querySelector('.id').value = '';
  }
};

let addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', addNewElement);

setTimeout(function(){
  let li = document.querySelectorAll('li');
  let check = document.querySelectorAll('.check');
  const isChecked = (li) => {
    li.classList.toggle('checked');
  }

  check[0].addEventListener('click', function() {isChecked(li[0])} );
  check[1].addEventListener('click', function() {isChecked(li[1])} );
  check[2].addEventListener('click', function() {isChecked(li[2])} );
  check[3].addEventListener('click', function() {isChecked(li[3])} );
}, 500);
