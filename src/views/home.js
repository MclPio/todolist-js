import { Project } from "../modules/project";
import { Todo } from "../modules/todo";
import { newProject } from "./new-project";

const content = document.getElementById('content');

const projects = document.createElement('section');
projects.id = 'projects';

const homeProject = new Project('home');
const homeButton = document.createElement('button');
homeButton.textContent = homeProject.name;

projects.append(homeButton);

const addProjectButton = document.createElement('button');
addProjectButton.id = 'new-project';
addProjectButton.textContent = 'New Project';
projects.append(addProjectButton);


// new project event stuff

// add new project
// projects nav
// show project
// CRUD todo buttons

content.append(projects);
newProject();