import {Todo} from './modules/todo.js';
import {Project} from './modules/project.js';
import {test} from './modules/test.js';
import { newProject } from "./views/new-project.js";
import { storage } from './modules/storage.js';

// retrieve projects from storage...
storage();

const content = document.getElementById('content');

const projects = document.createElement('section');
projects.id = 'projects';

const homeProject = new Project('home');
const otherProject = new Project('other');
const homeButton = document.createElement('button');
homeButton.textContent = homeProject.name;

projects.append(homeButton);

const addProjectButton = document.createElement('button');
addProjectButton.id = 'new-project';
addProjectButton.textContent = 'New Project';
projects.append(addProjectButton);

content.append(projects);
newProject();

console.log(storage().tempProjects);
