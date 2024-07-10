import {Todo} from './modules/todo.js';
import {Project} from './modules/project.js';
import {test} from './modules/test.js';
import { newProject } from "./views/new-project.js";
import { storage } from './modules/storage.js';
import { updateDOM } from './views/projectsToDOM.js';

const content = document.getElementById('content');
const projectsSection = document.createElement('section');
projectsSection.id = 'projects';
content.append(projectsSection);

// retrieves projects from localStorage and inserts into projectsSection
updateDOM();

// new project button plus its event listener
const addProjectButton = document.createElement('button');
addProjectButton.id = 'new-project';
addProjectButton.textContent = 'New Project';
content.append(addProjectButton);
newProject();
