import { Project } from "./project";

class Storage {
  static retrieve() {
    let obj = { ...localStorage };
    let projects = [];

    for (let key in obj) {
      // if the key is not a number, skip iteration
      if (!(Boolean(Number(key)))) {
        continue;
      }

      let parsedObj = JSON.parse(obj[key]);
      let project = new Project(parsedObj.name, parsedObj.todos, parsedObj.id);
      projects.push(project);
    }
    return projects;
  }

  static save(newProject) {
    localStorage.setItem(newProject.id, JSON.stringify(newProject));
  }

  // Filter so duplicate projects are not made...
  static update(project) {
    let projects = retrieve();
    projects.filter(p => p !== project);
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  // untested delete function
  static destroy(project) {
    let projects = retrieve()
    projects = projects.filter(p => p !== item)
    localStorage.setItem('projects', JSON.stringify(projects));
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
    let obj = JSON.parse(localStorage.getItem(id));
    let project = new Project(obj.name, obj.todos, obj.id);
    // console.log(project);
    return project;
  }

  static setCurrentProjectID(id) {
    localStorage.setItem('currentProjectID', id);
  }

  static getCurrentProjectID() {
    return JSON.parse(localStorage.getItem('currentProjectID'));
  }
}

export { Storage };