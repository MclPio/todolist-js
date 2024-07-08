class Todo {
  /**
   * Create a new Todo.
   * @param {string} title - The title of the todo.
   * @param {string} [description=''] - The description of the todo.
   * @param {Date} [dueDate=null] - The due date of the todo.
   * @param {Time} [dueTime=null] - The due time of the todo.
   * @param {1|2|3|4} [priority=4] - The priority of the todo. Must be 1, 2, 3, or 4.
   */
  constructor(title, description='', dueDate=null, dueTime=null, priority=4){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority; 
    // priority should have a choice between 1, 2, 3, 4 type integer?
  }
}

export { Todo };