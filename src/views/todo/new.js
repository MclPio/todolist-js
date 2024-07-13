import { Todo } from "../../modules/todo";

function newTodo() {  
  addButton();
  // create the todo function

}

function addButton() {
  const todoSection = document.getElementById('todo-section');
  const newTodoButton = document.createElement('button');
  newTodoButton.innerText = 'New Todo';
  newTodoButton.id = 'new-todo-button';
  todoSection.append(newTodoButton);
}
export { newTodo };