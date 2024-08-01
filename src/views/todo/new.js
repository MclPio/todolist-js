import { format } from 'date-fns';
import { Todo } from "../../modules/todo";
import { Storage } from "../../modules/storage";
import { projectShow } from '../project/show';
import { refresh } from '../refresh';

function todoNew() {
  const newTodoButton = document.getElementById('new-todo-button');
  
  newTodoButton.addEventListener('click', () => {
    if (!Storage.getCurrentProjectID()) {
      if (Storage.getCurrentProjectID() != 0) {
        alert('Create a project first');
        return;
      }
    }
    let form = document.createElement('form');
    form.id = 'new-todo-form';
    
    const modalTitle = document.createElement('p');
    modalTitle.innerText = 'New Todo';    

    if (document.getElementById('todo-form')) {
      const dialog = document.getElementById('todo-form');
      dialog.showModal();
    } else {
      const dialog = document.createElement('dialog');
      dialog.id = 'todo-form';

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
  
      // cancel new todo
      const cancelButton = document.createElement('button');
      cancelButton.id = 'cancel-new-todo';
      cancelButton.textContent = 'cancel';
      cancelButton.addEventListener('click', (event) => {
        event.preventDefault();
        dialog.close();
      })

      // submit new todo
      const submitButton = document.createElement('button');
      submitButton.id = 'submit-new-todo';
      submitButton.textContent = 'submit';

      const buttonGroup = document.createElement('div');
      buttonGroup.classList = 'button-group';
      buttonGroup.append(submitButton, cancelButton);
  
      submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (form.reportValidity()) {
          const newTodo = new Todo(nameInput.value, descInput.value, dueDateInput.value, dueTimeInput.value, prioritySelect.value);
          let project = Storage.getProject(Storage.getCurrentProjectID());
          project.todos.push(newTodo);
          Storage.save(project);
          refresh();
          // projectShow();
          // dialog.close();
          // form.reset();
          // prioritySelect.options[3].selected = true
        } else {
          // Form validation responses give good hints
        }
      })

      form.append(modalTitle, nameLabel, nameInput, descLabel, descInput, dueDateLabel, dueDateInput,dueTimeLabel, 
                  dueTimeInput, priorityLabel, prioritySelect, buttonGroup);
      dialog.append(form);
  
      const todoSection = document.getElementById('todo-section');
      todoSection.append(dialog);
      dialog.showModal();  
    }
  })
}

export { todoNew };