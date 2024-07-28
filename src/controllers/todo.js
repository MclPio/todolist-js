import { Storage } from '../modules/storage'
import { refresh } from '../views/refresh';
import { Todo } from '../modules/todo';

class TodoController {
  static new() {
  }

  static destroy(index) {
    let project = Storage.getCurrentProject();
    project.todos.splice(index,1);
    Storage.update(project);
    refresh();
  }

  static show(index) {
    let project = Storage.getCurrentProject();
    let todo = Storage.getTodo(index, project);
    return todo;
  }

  static update(index) {
    // remove old todo from project
    // add new todo to project
  }
}

export { TodoController };