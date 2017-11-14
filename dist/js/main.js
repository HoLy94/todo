'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import items from './items';
// import app from './app/app';


var App = function App() {
  _classCallCheck(this, App);

  var container = document.querySelector('.container');

  var list = document.createElement('ul');
  var form = document.createElement('div');
  var nameInput = document.createElement('input');
  var id = document.createElement('input');
  var addBtn = document.createElement('button');
  var span = document.createElement('span');

  list.classList.add('todo-list');
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
};

var app = new App();

var items = [{
  name: 'Vasyl',
  id: 5
}, {
  name: 'Anna',
  id: 3
}, {
  name: 'Mike',
  id: 8
}, {
  name: 'Alex',
  id: 2
}];

var deleteElement = function deleteElement(li) {
  var ul = document.querySelector('.todo-list');

  for (var i = 0; i < ul.childNodes.length; i++) {

    if (ul.childNodes[i] === li) {
      li.classList.add('remove');
      setTimeout(function () {
        return ul.removeChild(ul.childNodes[i]);
      }, 500);
      items.splice(i, 1);
      break;
    }
  }
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
    return deleteElement(li);
  });

  li.textContent = '' + item.name;
  idBadge.textContent = '' + item.id;
  deleteBtn.textContent = '\xD7';

  li.appendChild(idBadge);
  li.appendChild(check);
  li.appendChild(checkLabel);
  li.appendChild(deleteBtn);
  setTimeout(function () {
    return ul.appendChild(li);
  }, 180);
  setTimeout(function () {
    return li.removeAttribute('class', '.add');
  }, 200);
};

var defaultElements = function defaultElements() {
  for (var i = 0; i < items.length; i++) {
    render(items[i]);
  }
};

defaultElements();

var addNewElement = function addNewElement() {
  var name = document.querySelector('.nameInput').value;
  var id = document.querySelector('.idInput').value;
  var item = { name: name, id: +id };

  if (name === '' || id <= 0) {
    alert('Add some text please, and id > 0');
  } else {
    items.push(item);
    render(item);
    document.querySelector('.nameInput').value = '';
    document.querySelector('.idInput').value = '';
  }
};

var addBtn = document.querySelector('.addBtn');
addBtn.addEventListener('click', addNewElement);

setTimeout(function () {
  var li = document.querySelectorAll('li');
  var check = document.querySelectorAll('.check');
  var isChecked = function isChecked(li) {
    return li.classList.toggle('checked');
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