const input = document.getElementById('todo-input');
const button = document.getElementById('add-todo');
const list = document.getElementById('todo-list');

let todoList = [];

button.addEventListener('click', addTodo);

function addTodo() {
  const todo = input.value.trim();
  
  if (todo.length === 0) {
    return;
  }
  
  todoList.push(todo);
  
  const todoItem = document.createElement('li');
  const todoText = document.createElement('span');
  const todoDelete = document.createElement('button');
  
  todoText.textContent = todo;
  todoDelete.textContent = 'Delete';
  
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoDelete);
  list.appendChild(todoItem);
  
  todoDelete.addEventListener('click', () => {
    const index = todoList.indexOf(todo);
    if (index > -1) {
      todoList.splice(index, 1);
      todoItem.remove();
    }
  });
  
  input.value = '';
}

