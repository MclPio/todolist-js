import {Todo} from './modules/todo.js';
import {Project} from './modules/project.js';
import { newProject } from "./views/project/new.js";
import { storage } from './modules/storage.js';
import { updateDOM } from './views/project/index.js';
import './css/style.css';
import 'material-symbols';
import { projectButtonListener, show } from './views/project/show.js';
import { newTodo } from './views/todo/new.js';
const content = document.getElementById('content');
const projectsSection = document.createElement('section');
projectsSection.id = 'projects-section';

const todoSection = document.createElement('section');
const todoList = document.createElement('div');
todoList.id = 'todo-list';
todoSection.id = 'todo-section';

todoSection.append(todoList);

const container = document.createElement('div');
container.id = 'container';

// projects header section...
const projectHeaderContainer = document.createElement('div');
projectHeaderContainer.classList = 'project-header-container';

const addProjectButton = document.createElement('button');
addProjectButton.id = 'new-project';
addProjectButton.textContent = 'New Project';

const myProjectsHeader = document.createElement('p');
myProjectsHeader.innerText = 'My Projects';

projectHeaderContainer.append(myProjectsHeader, addProjectButton);
projectsSection.append(projectHeaderContainer);
const projectList = document.createElement('div');
projectList.id = 'projects';
projectsSection.append(projectList);

container.append(projectsSection, todoSection);
content.append(container);


// retrieves projects from localStorage and inserts into projectsSection
updateDOM();

// new project button plus its event listener
newProject();

projectButtonListener();
newTodo();
