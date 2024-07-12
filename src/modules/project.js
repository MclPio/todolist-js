import Storage from './storage.js'

class Project {
  /**
   * Create a new Project.
   * @param {string} name - The name of the project.
   * @param {integer} id - unique id of project.
   * @param {array} todos - todo array
   */

  constructor(name, id, todos=[]) {
    this.id = id
    this.name = name;
    this.todos = todos;
  }

  #setID() {
    // look through project ID list and set id in constructor
    // if list exists
    // if list does not exist

  }

  addTodo(item) {
    this.todos.push(item)
  }

  removeTodo(item) {
    this.todos = this.todos.filter(t => t !== item);
  }

  getTodos() {
    return this.todos
  }

  todoCount() {
    return this.todos.length
  }
}

export { Project };
