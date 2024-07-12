import { Project } from "./project";

class Storage {
  static retrieve() {
    const tempProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    let projects = [];
    for (let i = 0; i < tempProjects.length; i++) {
      projects.push(new Project(tempProjects[i].name, tempProjects[i].id, tempProjects[i].todos));
    }
    return projects;
  }

  static save(newProject) {
    let projects = retrieve()
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
  }
// Filter so duplicate projects are not made...
  static update(project) {
    let projects = retrieve();
    projects.filter(p => p !== project);
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  // returns id for storage to use for new objects...
  static newProjectID() {
    let projectLength = retrieve().length;
    if (projectLength < 0) {
      return 0;
    } else {
      return projectLength;
    }
  }

  // untested delete function
  static destroy(project) {
    let projects = retrieve()
    projects = projects.filter(p => p !== item)
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  static projectIDList() {
    if (localStorage.getItem('projectIDList')){
      // get new id as long as it is not in the array...
    } else {
      // probably will have to add first key here somehow
      localStorage.setItem('projectIDList', [])
    }
    
  }
}

export default Storage;