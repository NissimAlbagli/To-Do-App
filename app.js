const form = document.querySelector('#todo__form');
const input = document.querySelector('#todo__text');
const list = document.querySelector('#todo__list');

let todos = [];

function updateList() {
    list.innerHTML = '';
    for (let todo of todos) {
        const item = document.createElement('li');
        item.innerHTML = `
        <span class='span__todo__text'>${todo.text}</span>
        <button class='complete__button'>Complete</button>
        <button class='delete__button'>Delete</button>
        `;

        if (todo.completed) {
            item.classList.add('completed');
        }
        list.appendChild(item)
    }
}

function addTodo(text) {
    const newTodo = {
        text,
        completed: false
    };
    todos.push(newTodo);
    updateList();
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const text = input.value;

    if (text) {
        addTodo(text)
        input.value = '';
    }
});

list.addEventListener('click', event => {
    if (event.target.classList.contains('complete__button')) {
        const index = Array.from(list.children).indexOf(event.target.parentNode);
        todos[index].completed = !todos[index].completed;
        updateList();
    } else if (event.target.classList.contains('delete__button')) {
        const index = Array.from(list.children).indexOf(event.target.parentNode);
        todos.splice(index, 1);
        updateList();
    }
});
