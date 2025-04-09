const actionForm = document.getElementById('action-form');
actionForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const content = document.getElementById('form-content');
  if (content.value == '') {
    return;
  }
  createTodo(content.value);
  content.value = '';
})


function createTodo(todo = new String()) {
  const todoList = document.querySelector(".todo-list");
  const todoElememt = document.createElement('div');
  todoElememt.classList.add('todo-task')
  const checkBoxElement = document.createElement('input');
  checkBoxElement.type = 'checkbox';
  checkBoxElement.classList.add('done-task');
  checkBoxElement.addEventListener(('click'), () => {
    handleDoneTask(todoElememt, checkBoxElement, todo);
  });
  todoElememt.innerHTML += `<p class="todo">${todo}</p>`;
  todoElememt.appendChild(checkBoxElement);
  todoList.prepend(todoElememt)
}


function handleDoneTask(element, checkBoxValue, content) {
  const todo = element.querySelector('.todo');
  if (checkBoxValue.checked) {
    todo.innerHTML = `<s>${content}</s>`
  } else {
    todo.innerHTML = `${content}`;
  }
}