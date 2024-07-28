import { format } from 'date-fns';
import { Todo } from '../modules/todo';

let todoForm = function () {
  let form = document.createElement('form');
  form.id = 'new-todo-form';

  // name
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Task name'
  nameLabel.htmlFor = 'task-name';

  const nameInput = document.createElement('input');
  nameInput.id = 'task-name';
  nameInput.type = 'text';
  nameInput.required = true;

  // description
  const descLabel = document.createElement('label');
  descLabel.textContent = 'Description'
  descLabel.htmlFor = 'task-desc';

  const descInput = document.createElement('textarea');
  descInput.id = 'task-desc';

  // dueDate
  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due Date'
  dueDateLabel.htmlFor = 'task-due-date';

  const dueDateInput = document.createElement('input');
  dueDateInput.id = 'task-due-date';
  dueDateInput.type = 'date';
  dueDateInput.min = format(new Date(), 'yyyy-MM-dd')

  // dueTime
  const dueTimeLabel = document.createElement('label');
  dueTimeLabel.textContent = 'Due Time'
  dueTimeLabel.htmlFor = 'task-due-time';

  const dueTimeInput = document.createElement('input');
  dueTimeInput.id = 'task-due-time';
  dueTimeInput.type = 'time';

  // priority
  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority'
  priorityLabel.htmlFor = 'task-priority';

  const prioritySelect = document.createElement('select');
  prioritySelect.id = 'task-priority';
  for (let i = 1; i < 5; i++ ){
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    prioritySelect.append(option);
  }
  prioritySelect.options[3].selected = true;

  form.append(nameLabel, nameInput, descLabel, descInput, dueDateLabel, 
    dueDateInput,dueTimeLabel, dueTimeInput, priorityLabel, prioritySelect);

  return form
}();

function fillTodoForm(form, todo) {
  form.querySelector('#task-name').value = todo.title
  form.querySelector('#task-desc').value = todo.description
  form.querySelector('#task-due-date').value = todo.dueDate
  form.querySelector('#task-due-time').value = todo.dueTime
  form.querySelector('#task-priority').options[todo.priority - 1].selected = true;
}

function formToTodo(form) {
  let todo = new Todo(form.querySelector('#task-name').value, 
                      form.querySelector('#task-desc').value,
                      form.querySelector('#task-due-date').value,
                      form.querySelector('#task-due-time').value,
                      form.querySelector('#task-priority').value
                    );
  return todo;
}

export { todoForm, fillTodoForm, formToTodo }