import { Project } from "../../modules/project";
import { Storage } from '../../modules/storage';
import { projectIndex } from "./index";
import { projectShow } from "./show";

function projectEdit() {
  const optionButtons = document.getElementsByClassName('project-option-button');

  for (let i = 0; i < optionButtons.length; i++) {
    let button = optionButtons[i];
    
    // add event listener to buttons
        // if user clicks open modal,
        // form with rename and delete and cancel
    // issue: new project will need to have this added when created
    button.addEventListener('click', ()=> {
      console.log(`hi from button ${i}`);
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