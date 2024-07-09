import {Todo} from './todo.js';
import {commands} from './commands.js';
import {Project} from './project.js';

function test() {
  // make new project
  // insert a couple of todos into the project....

  const home = new Project('Home');

  const todo1 = new Todo('Mow Lawn');
  const todo2 = new Todo('Clean gutters');
  const todo3 = new Todo('Paint garage');

  home.addTodo(todo1);
  home.addTodo(todo2);
  home.addTodo(todo3);

  console.log(home.getTodos());

  home.removeTodo(todo2);

  console.log(home.getTodos());
};

export { test };