class Project {
  /**
   * Create a new Project.
   * @param {string} name - The name of the project.
   */
  constructor(name) {
    this.name = name;
    this.todos = [];
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
