import { Project } from "./project";
import { Todo } from "./todo";

class Storage {
  static retrieve() {
    let obj = { ...localStorage };
    let projects = [];

    for (let key in obj) {
      // if the key is not a number, skip iteration
      if (!(Boolean(Number(key)))) {
        if (key != 0) {
          if (key !== "defaultProject"){
            continue;
          }
        }
      }

      let parsedObj = JSON.parse(obj[key]);
      let project = new Project(parsedObj.name, parsedObj.todos, parsedObj.id, parsedObj.completed);
      projects.push(project);
    }
    return projects;
  }

  static save(newProject) {
    localStorage.setItem(newProject.id, JSON.stringify(newProject));
  }

  static update(project) {
    localStorage.setItem(project.id, JSON.stringify(project))
  }

  // breaks app since currentProjectID does not get reassigned
  static destroy(projectID) {
    localStorage.removeItem(projectID);
  }

  /**
   * Returns array from projectIDList key or creates it if null.
   * @returns {array} Integers for project IDs.
   */
  static projectIDList() {
    let storedIDArray = JSON.parse(localStorage.getItem('projectIDList'));
    if (storedIDArray){
      return storedIDArray;
    } else {
      localStorage.setItem('projectIDList', JSON.stringify([]));
      storedIDArray = JSON.parse(localStorage.getItem('projectIDList'));
      return storedIDArray;
    }
  }

  //takes new ID inserts to projectIDList
  static updateProjectIDList(projectIDArray) {
    localStorage.setItem('projectIDList', JSON.stringify(projectIDArray));
  }

  // returns project obj
  static getProject(id) {
    if (!localStorage.getItem(id)) {
      return null;
    }

    let obj = JSON.parse(localStorage.getItem(id));
    let project = new Project(obj.name, obj.todos, obj.id, obj.completed);
    return project;
  }

  // return todo based on current or specified project
  static getTodo(index, project) {
    let obj = project.todos[index];
    let todo = new Todo(obj.title, obj.description, obj.dueDate, obj.dueTime, parseInt(obj.priority), obj.completed);
    return todo;
  }

  static saveTodo(index, todo, project = this.getCurrentProject()) {
    project.todos[index] = todo;
    this.save(project);
  }

  static moveTodoToCompleted(todo, project){
    project.completed.push(todo)
    this.save(project)
  }

  static destroyAllCompleted() {
    let projects = this.retrieve()
    for (let i = 0; i < projects.length; i++) {
      let project = projects[i]
      project.completed = []
      this.update(project)
    }
  }

  static setCurrentProjectID(id) {
    localStorage.setItem('currentProjectID', id);
  }

  static getCurrentProjectID() {
    return JSON.parse(localStorage.getItem('currentProjectID'));
  }

  static getCurrentProject() {
    return this.getProject(this.getCurrentProjectID())
  }

  //cleans projectIDList
  static clean() {
    let projectObjArray = this.retrieve();
    let newProjectIDs = [];
    for (let i = 0; i < projectObjArray.length; i++) {
      newProjectIDs.push(projectObjArray[i].id);
    }
    this.updateProjectIDList(newProjectIDs);
  }
}

export { Storage };