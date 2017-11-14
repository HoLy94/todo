'use strict';

// import items from './items';
// import app from './app/app';


var app = function app() {
  var container = document.querySelector('.container');
  var list = document.createElement('ul');
  list.classList.add('todo-list');
  var form = document.createElement('div');
  form.classList.add('form');
  var name1 = document.createElement('input');
  name1.classList.add('name');
  var id = document.createElement('input');
  id.setAttribute('type', 'number');
  id.classList.add('id');
  var addBtn = document.createElement('button');
  addBtn.classList.add('addBtn');
  addBtn.textContent = 'add';
  var span = document.createElement('span');
  span.textContent = '+';
  form.appendChild(name1);
  form.appendChild(id);
  addBtn.appendChild(span);
  form.appendChild(addBtn);
  container.appendChild(form);
  container.appendChild(list);
};
app();

var items = [{ name: 'Vasyl', id: 5 }, { name: 'Anna', id: 3 }, { name: 'Mike', id: 8 }, { name: 'Alex', id: 2 }];

var deleteElement = function deleteElement(li) {
  var ul = document.querySelector('.todo-list');
  for (var i = 0; i < ul.childNodes.length; i++) {
    if (ul.childNodes[i] == li) {
      li.classList.add('remove');
      setTimeout(function () {
        ul.removeChild(ul.childNodes[i]);
      }, 500);
      items.splice(i, 1);
      break;
    };
  };
};

var render = function render(item) {
  var ul = document.querySelector('.todo-list');
  var li = document.createElement('li');
  var idBadge = document.createElement('span');
  var check = document.createElement('input');
  var checkLabel = document.createElement('label');
  var deleteBtn = document.createElement('button');

  check.setAttribute('type', 'checkbox');
  check.setAttribute('name', 'check');
  checkLabel.setAttribute('for', 'check');

  li.classList.add('add');
  idBadge.classList.add('badge');
  check.classList.add('check');
  checkLabel.classList.add('checkLabel');
  deleteBtn.classList.add('deleteBtn');

  deleteBtn.addEventListener('click', function () {
    deleteElement(li);
  });

  li.textContent = '' + item.name;
  idBadge.textContent = '' + item.id;
  deleteBtn.textContent = '\xD7';

  li.appendChild(idBadge);
  li.appendChild(check);
  li.appendChild(checkLabel);
  li.appendChild(deleteBtn);
  setTimeout(function () {
    ul.appendChild(li);
  }, 180);
  setTimeout(function () {
    li.removeAttribute('class', '.add');
  }, 200);
};

var defaultElements = function defaultElements() {
  for (var i = 0; i < items.length; i++) {
    render(items[i]);
  };
};

defaultElements();

var addNewElement = function addNewElement() {
  var name = document.querySelector('.name').value;
  var id = document.querySelector('.id').value;
  var item = { name: name, id: +id };

  if (name === '' || id <= 0) {
    alert('Add some text please, and id > 0');
  } else {
    items.push(item);
    render(item);
    document.querySelector('.name').value = '';
    document.querySelector('.id').value = '';
  }
};

var addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', addNewElement);

setTimeout(function () {
  var li = document.querySelectorAll('li');
  var check = document.querySelectorAll('.check');
  var isChecked = function isChecked(li) {
    li.classList.toggle('checked');
  };

  check[0].addEventListener('click', function () {
    isChecked(li[0]);
  });
  check[1].addEventListener('click', function () {
    isChecked(li[1]);
  });
  check[2].addEventListener('click', function () {
    isChecked(li[2]);
  });
  check[3].addEventListener('click', function () {
    isChecked(li[3]);
  });
}, 500);