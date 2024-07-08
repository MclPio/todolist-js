import {Todo} from './todo.js';
import {commands} from './commands.js';

//console.log(new Todo('rake grass', 'go to rake grass in city center', '2024-07-09', 'idk'))
const user_input = commands().getInput()

// lets try to make the todo object using user input:
const todo_obj = new Todo(user_input.title, user_input.description, user_input.dueDate, user_input.dueTime, user_input.priority);
console.log(todo_obj);