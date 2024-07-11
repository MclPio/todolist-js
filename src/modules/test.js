import {Todo} from './todo.js';
import {Project} from './project.js';
import { storage } from './storage.js';
import { updateDOM } from '../views/projectsToDOM.js';

function test() {
  let projectID = storage().newProjectID;
  let testProject = storage().retrieve()[1];
  let todo1 = new Todo('mow lawn');
  let todo2 = new Todo('clean pool');
  let todo3 = new Todo('swim');
  testProject.addTodo(todo1);
  testProject.addTodo(todo2);
  testProject.addTodo(todo3);
  storage().update(testProject);
  updateDOM();
};

export { test };