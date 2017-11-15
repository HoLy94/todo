'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Default list items
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

//Add new element to list
var addNewElement = function addNewElement() {
  var name = document.querySelector('.nameInput').value;
  var id = document.querySelector('.idInput').value;
  var item = { name: name, id: +id };

  if (name === '' || id <= 0) {
    alert('Add some text please, and id > 0');
  } else {
    items.push(item);
    var newListItem = new ListItem(item);
    document.querySelector('.nameInput').value = '';
    document.querySelector('.idInput').value = '';
  }
};
//Remove element from list
var removeElement = function removeElement(ul, li) {
  li.classList.add('remove');
  setTimeout(function () {
    return ul.removeChild(li);
  }, 500);
};
//Checked element
var isChecked = function isChecked(li) {
  return li.classList.toggle('checked');
};

var App = function App() {
  _classCallCheck(this, App);

  var container = document.querySelector('.container');

  var title = document.createElement('h1');
  var list = document.createElement('ul');
  var form = document.createElement('div');
  var nameInput = document.createElement('input');
  var idInput = document.createElement('input');
  var addBtn = document.createElement('button');
  var span = document.createElement('span');
  var sortContainer = document.createElement('div');
  var sortBtn = document.createElement('button');

  title.classList.add('title');
  list.classList.add('todo-list');
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
};

var app = new App();

var ListItem = function ListItem(item) {
  _classCallCheck(this, ListItem);

  var ul = document.querySelector('.todo-list');
  var li = document.createElement('li');
  var idBadge = document.createElement('span');
  var check = document.createElement('input');
  var checkLabel = document.createElement('label');
  var removeBtn = document.createElement('button');

  check.setAttribute('type', 'checkbox');
  check.setAttribute('name', 'check');
  checkLabel.setAttribute('for', 'check');

  li.classList.add('add');
  idBadge.classList.add('badge');
  check.classList.add('check');
  checkLabel.classList.add('checkLabel');
  removeBtn.classList.add('removeBtn');

  removeBtn.addEventListener('click', function () {
    return removeElement(ul, li);
  });
  check.addEventListener('click', function () {
    return isChecked(li);
  });

  li.textContent = item.name;
  idBadge.textContent = item.id;
  removeBtn.textContent = '\xD7';

  li.appendChild(idBadge);
  li.appendChild(check);
  li.appendChild(checkLabel);
  li.appendChild(removeBtn);

  setTimeout(function () {
    return ul.appendChild(li);
  }, 180);
  setTimeout(function () {
    return li.removeAttribute('class', '.add');
  }, 200);
};

//Default list


(function () {
  for (var i = 0; i < items.length; i++) {
    var defaultListItem = new ListItem(items[i]);
  }
})();

var sortById = function sortById() {
  var li = document.querySelectorAll('li');

  for (var i = 0; i < li.length; i++) {
    li[i].style.order = items[i].id;
  }
};

var sortBtn = document.querySelector('.sortBtn');
sortBtn.addEventListener('click', sortById);