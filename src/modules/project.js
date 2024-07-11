class Project {
  /**
   * Create a new Project.
   * @param {string} name - The name of the project.
   * @param {integer} id - unique id of project.
   * @param {array} todos - todo array
   */

  // I need constructor to set ids that are not taken by old projects...
  constructor(name, id, todos=[]) {
    this.id = id
    this.name = name;
    this.todos = todos;
  }

  setId() {
    // id should only be made automatically with project class...
    // if projects retrieved should be the only time they are set in storage class...
    
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
