import { storage } from "../modules/storage";

function updateDOM(){
  let projectsArray = storage().retrieve();
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
    projectOptionsButton.classList = 'project-options-button';
    projectOptionsButton.innerHTML = `<span class="material-symbols-outlined">more_horiz</span>`;


    projectContainer.append(projectButton, projectOptionsButton);
    projectsSection.append(projectContainer);
  }
}

export { updateDOM };