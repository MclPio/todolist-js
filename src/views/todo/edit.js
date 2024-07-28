import { TodoController } from "../../controllers/todo";
import { todoForm, fillTodoForm } from "../../helpers/todoForm";

function todoEdit() {
  const container = document.getElementById('container');
  const todoLi = document.getElementsByClassName('todo-li');
  const dialog = document.createElement('dialog');
  dialog.id = 'todo-options';

  const modalTitle = document.createElement('h1');
  modalTitle.innerText = 'Edit Todo';

  const cancel = function() {
    let cancelButton = document.createElement('button');
    cancelButton.innerText = 'Cancel';
    cancelButton.id = 'cancel-todo-update';
    return cancelButton;
  }();

  cancel.addEventListener('click', () => {
    dialog.close();
  });

  const submitButton = function() {
    let submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    submitButton.id = 'submit-todo-update';
    return submitButton;
  }();

  const destroyButton = function() {
    let destroyButton = document.createElement('button');
    destroyButton.innerText = 'Delete Project';
    destroyButton.id = 'delete-todo';
    return destroyButton;
  }();

  let form = todoForm;

  dialog.append(modalTitle, form, submitButton, cancel, destroyButton);
  container.append(dialog);

  for (let i = 0; i < todoLi.length; i++ ) {
    const button = document.createElement('button');
    button.innerText = 'Edit';
    button.addEventListener('click', () => {
      let todo = TodoController.show(i);
      fillTodoForm(form, todo);
      // form should be pre filled with current values
      // send form info to todo controller...
      // need a complete todo button
      dialog.showModal();
    })
    todoLi[i].append(button);
  }
}

export { todoEdit };