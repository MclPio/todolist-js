import { Project } from "../../modules/project";
import { Storage } from '../../modules/storage';
import { projectIndex } from "./index";
import { projectShow } from "./show";

function projectEdit() {
  const container = document.getElementById('container');
  const optionButtons = document.getElementsByClassName('project-option-button');
  const dialog = document.createElement('dialog');
  dialog.id = 'project-options';

  const modalTitle = document.createElement('h1');
  modalTitle.innerText = 'Edit Project';

  const cancel = function() {
    let cancelButton = document.createElement('button');
    cancelButton.innerText = 'Cancel';
    cancelButton.id = 'cancel-project-update';
    cancelButton.addEventListener('click', () => {
      dialog.close();
    })
    return cancelButton;
  }();

  const submitButton = function() {
    let submitButton = document.createElement('button');
    submitButton.innerText = 'Submit';
    submitButton.id = 'submit-project-update';
    return submitButton;
  }();

  const destroyButton = function() {
    let destroyButton = document.createElement('button');
    destroyButton.innerText = 'Delete Project';
    destroyButton.id = 'delete-project';
    return destroyButton;
  }();

  const projectNameInput = document.createElement('input');
  projectNameInput.type = 'text';

  dialog.append(modalTitle, projectNameInput, submitButton, cancel, destroyButton);
  container.append(dialog);
  for (let i = 0; i < optionButtons.length; i++) {
    let button = optionButtons[i];
    // issue: new project will need to have this added when created
    button.addEventListener('click', ()=> {
      let projectID = button.previousSibling.dataset.id
      let projectName = Storage.getProject(projectID).name;
  
      projectNameInput.value = projectName;
      console.log(projectID);

      destroyButton.addEventListener('click', () => {
        if (confirm(`This will delete ${projectName} and its todos.`)) {
          Storage.destroy(projectID);
          // change currentProjectID. need to make a default project!
          // refresh DOM! (old project name, old project selection and current project ID still same.)
          dialog.close();
        }
        
      })
      dialog.showModal();
    })

    // rename:
    // update Project name in localStorage
    // update Project name in dom
    
    // delete:
    // delete project from localStorage
    // delete project from dom
  }
}

export { projectEdit }