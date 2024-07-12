import { Project } from "./project";

class Storage {
  static retrieve() {
    let items = { ...localStorage };
    
    let projects = [];
    for (let i = 0; i < tempProjects.length; i++) {
      projects.push(new Project(tempProjects[i].id, tempProjects[i].name, tempProjects[i].todos));
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
}

export { Storage };