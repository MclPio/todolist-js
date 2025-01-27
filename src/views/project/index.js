import { Storage } from "../../modules/storage";

/**
 * Updates the DOM projectsSection element with project list retrieved from storage.
 */
function projectIndex(){
  let projectsArray = Storage.retrieve();
  const projectsSection = document.getElementById('projects');
  projectsSection.innerHTML = '';

  for (let i = 0; i < projectsArray.length; i++){
    const projectContainer = document.createElement('div');
    projectContainer.classList = 'project-container'

    const projectButton = document.createElement('button');
    projectButton.classList = 'project-button';
    projectButton.setAttribute('data-id', `${projectsArray[i].id}`);
    projectButton.innerHTML = projectsArray[i].name;

    const projectOptionsButton = document.createElement('button');
    projectOptionsButton.classList = 'project-option-button';
    projectOptionsButton.innerHTML = `<span class="material-symbols-outlined">more_horiz</span>`;

    if (projectsArray[i].id === 0) {
      projectContainer.append(projectButton)
    } else {
      projectContainer.append(projectButton, projectOptionsButton);
    }
    projectsSection.append(projectContainer);
  }
}

export { projectIndex };