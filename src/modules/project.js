import { Storage } from "./storage";

class Project {
  /**
   * Create a new Project.
   * @param {string} name - The name of the project.
   * @param {array} todos - todo array
   * @param {integer} id - unique id of project.
   */
  constructor(name, todos=[], id=this.#setID(), completed = []) {
    this.id = id;
    this.name = name;
    this.todos = todos;
    this.completed = completed;
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

  /**
   * Generate a unique ID for a new project and updates localStorage.
   * @private
   * @returns {number} A unique project ID.
   */
  #setID() {
    let idArray = Storage.projectIDList();
    let lastID = idArray[idArray.length - 1];

    if (lastID == null) {
      Storage.updateProjectIDList([0]);
      return 0;
    } else {
      idArray.push(lastID+1);
      Storage.updateProjectIDList(idArray);  
      return lastID + 1;
    }
  }
}

export { Project };
