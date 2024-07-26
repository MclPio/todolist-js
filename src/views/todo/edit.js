import { TodoController } from "../../controllers/todo";

function todoEdit() {
  const todoLi = document.getElementsByClassName('todo-li');

  for (let i = 0; i < todoLi.length; i++ ) {
    const button = document.createElement('button');
    button.innerText = 'Edit';
    button.addEventListener('click', () => {
      // open modal to update todo details...
      // send form info to todo controller...
      // need a complete todo button
    })
    todoLi[i].append(button);
  }
}

export { todoEdit };