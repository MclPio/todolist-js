import { storage } from "../modules/storage";

function updateDOM(){
  let projectsArray = storage().retrieve();
  const projectsSection = document.getElementById('projects');
  projectsSection.innerHTML = '';

  for (let i = 0; i < projectsArray.length; i++){
    const projectButton = document.createElement('button');
    projectButton.classList = 'project';
    projectButton.innerHTML = projectsArray[i].name;
    projectsSection.append(projectButton);
  }
}

export { updateDOM };