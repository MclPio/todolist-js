import { Project } from "../modules/project";
import { storage } from '../modules/storage';
import { updateDOM } from "./projectsToDOM";

function newProject() {
  const newProjectButton = document.getElementById('new-project');

  newProjectButton.addEventListener('click', () => {
    if (document.getElementById('form-group')) {
      const dialog = document.getElementById('form-group');
      dialog.showModal();
    } else {
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
        dialog.close();
      })
  
      // submit new project
      const submitButton = document.createElement('button');
      submitButton.id = 'submit-new-project';
      submitButton.textContent = 'submit';
      submitButton.addEventListener('click', () => {
        if (input.value) {
          const newProject = new Project(input.value, storage().newProjectID());
          storage().save(newProject);
          updateDOM();
        } else {
          alert('Project name cannot be empty')
        }
      })
      dialog.append(label, input, submitButton, cancelButton);
  
      const projects = document.getElementById('projects');
      projects.append(dialog);
      dialog.showModal();  
    }
  })
}

export { newProject };
