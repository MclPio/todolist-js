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
