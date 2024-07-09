import {Todo} from './todo.js';
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

  todo1.title = 'do not mow';
  todo1.description = 'description';
  todo1.dueDate = '2050-01-01';
  todo1.priority = 2;
  todo1.complete = true;

  console.log(home.getTodos()[0])
};

export { test };