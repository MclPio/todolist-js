import { Project } from "../modules/project";

function newProject() {
  const newProjectButton = document.getElementById('new-project');

  newProjectButton.addEventListener('click', () => {
    const dialog = document.createElement('dialog');
    dialog.id = 'form-group';

    const label = document.createElement('label');
    label.textContent = 'Project Name'
    label.htmlFor = 'project-name';

    const input = document.createElement('input');
    input.id = 'project-name';
    input.type = 'text';

    // cancel new project
    const cancelButton = document.createElement('button');
    cancelButton.id = 'cancel-new-project';
    cancelButton.textContent = 'cancel';
    cancelButton.addEventListener('click', () => {
      dialog.remove();
    })

    // submit new project
    const submitButton = document.createElement('button');
    submitButton.id = 'submit-new-project';
    submitButton.textContent = 'submit';
    submitButton.addEventListener('click', () => {
      if (input.value) {
        // create project...
      } else {
        alert('ayooo can not be empty')
      }
    })
    dialog.append(label, input, submitButton, cancelButton);

    const projects = document.getElementById('projects');
    projects.append(dialog);
    dialog.showModal();
  })

}

export { newProject };
