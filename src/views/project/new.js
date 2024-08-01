import { Project } from "../../modules/project";
import { Storage } from '../../modules/storage';
import { projectIndex } from "./index";
import { projectShow } from "./show";
import { refresh } from "../refresh";

/**
 * New Project Button Event Listener, DOM updates, and Storage updates.
 */
function projectNew() {
  const newProjectButton = document.getElementById('new-project');
  newProjectButton.innerHTML = '<span class="material-symbols-outlined">add</span>'
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
          const newProject = new Project(input.value);
          Storage.save(newProject);
          Storage.setCurrentProjectID(newProject.id);
          refresh();
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

export { projectNew };
