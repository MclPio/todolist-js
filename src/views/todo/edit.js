import { TodoController } from "../../controllers/todo";
import { todoForm, fillTodoForm, formToTodo } from "../../helpers/todoForm";
import { refresh } from "../refresh";

function todoEdit() {
  const container = document.getElementById('container');
  const todoLi = document.getElementsByClassName('todo-li');
  const dialog = document.createElement('dialog');
  dialog.id = 'todo-options';

  const modalTitle = document.createElement('p');
  modalTitle.innerText = 'Edit Todo';

  const cancel = function() {
    let cancelButton = document.createElement('button');
    cancelButton.innerText = 'Close';
    cancelButton.id = 'cancel-todo-update';
    return cancelButton;
  }();

  cancel.addEventListener('click', () => {
    dialog.close();
    refresh();
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
    todoLi[i].addEventListener('click', () => {
      let todo = TodoController.show(todoLi[i].dataset.index);
      fillTodoForm(form, todo);
      submitButton.addEventListener('click', () => {
        let updatedTodo = formToTodo(form);
        TodoController.update(todoLi[i].dataset.index, updatedTodo);
      })
      destroyButton.addEventListener('click', () => {
        if (confirm("Are you sure?")) {
          TodoController.destroy(todoLi[i].dataset.index);
        } else {
          refresh();
        }
      })
      dialog.showModal();
    })
  }
}

export { todoEdit };