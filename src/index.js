import {Todo} from './modules/todo.js';
import {Project} from './modules/project.js';
import {test} from './modules/test.js';
import { newProject } from "./views/new-project.js";
import { storage } from './modules/storage.js';
import { updateDOM } from './views/projectsToDOM.js';
import './css/style.css';
import 'material-symbols';

const content = document.getElementById('content');
const projectsSection = document.createElement('section');
projectsSection.id = 'projects-section';

const projectList = document.createElement('div');
projectList.id = 'projects';
projectsSection.append(projectList);
content.append(projectsSection);

// retrieves projects from localStorage and inserts into projectsSection
updateDOM();

// new project button plus its event listener
const addProjectButton = document.createElement('button');
addProjectButton.id = 'new-project';
addProjectButton.textContent = 'New Project';
projectsSection.append(addProjectButton);
newProject();
