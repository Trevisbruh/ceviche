const form = document.querySelector('#todo-input-form');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-item-container');
const subjects = document.querySelectorAll('.subject');
const scoreNum = document.querySelector('.score-num');
const logoutBtn = document.querySelector('.logout-btn');

window.addEventListener('load', () => {
    let logedin = localStorage.getItem('login') || false;
    if (logedin === 'false') {
        window.location.href = '/ceviche/login/login_index.html';
    }

})

let todos = []
todos = JSON.parse(localStorage.getItem('todos'));
// console.log(todos);

let current = '';

todos.forEach((item, index) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const todoItemTitle = document.createElement('p');
    todoItemTitle.classList.add('todo-item-title');
    todoItemTitle.innerText = item;

    const todoItemBtn = document.createElement('button');
    todoItemBtn.classList.add('todo-item-btn');
    todoItemBtn.innerText = 'Del';

    todoItem.appendChild(todoItemTitle);
    todoItem.appendChild(todoItemBtn);
    todoList.appendChild(todoItem);

    todoItemBtn.addEventListener('click', () => {
        todoList.removeChild(todoItem);
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
    });
})

scoreNum.addEventListener('change', () => {
    // localStorage.setItem(current, scoreNum.value);
    console.log(current);
    console.log(localStorage.getItem(current));
    console.log(scoreNum.value);
    localStorage.setItem(current, scoreNum.value);
    console.log(localStorage.getItem(current))
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = todoInput.value;

    if (!todo) {
        alert("Please Fill The Todo First");
        return;
    }

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const todoItemTitle = document.createElement('p');
    todoItemTitle.classList.add('todo-item-title');
    todoItemTitle.innerText = todo;

    const todoItemBtn = document.createElement('button');
    todoItemBtn.classList.add('todo-item-btn');
    todoItemBtn.innerText = 'Del';

    todoItem.appendChild(todoItemTitle);
    todoItem.appendChild(todoItemBtn);
    todoList.appendChild(todoItem);
    todoInput.value = '';
    todos.push(todo);
    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log(JSON.parse(localStorage.getItem('todos')));

    todoItemBtn.addEventListener('click', () => {
        todoList.removeChild(todoItem);
        index = todos.indexOf(todo);
        todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
    });
});

scoreNum.addEventListener('click', () => {
    scoreNum.removeAttribute('readonly');
})

subjects.forEach(subject => {
    subject.addEventListener('click', () => {
        scoreNum.value = localStorage.getItem(subject.value);
        current = subject.value;
    })
})

logoutBtn.addEventListener('click', () => {
    localStorage.setItem('login', false);
    console.log('bruh')
    console.log(localStorage.getItem('login'))
})
