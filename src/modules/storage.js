import { Project } from "./project";

function storage() {
  function retrieve() {
    const tempProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    let projects = [];
    for (let i = 0; i < tempProjects.length; i++) {
      projects.push(new Project(tempProjects[i].name, tempProjects[i].id, tempProjects[i].todos));
    }
    return projects;
  }

  function save(newProject) {
    let projects = retrieve()
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
  }
// Filter so duplicate projects are not made...
  function update(project) {
    let projects = retrieve();
    projects.filter(p => p !== project);
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  // returns id for storage to use for new objects...
  const newProjectID = () => {
    let projectLength = retrieve().length;
    if (projectLength < 0) {
      return 0;
    } else {
      return projectLength;
    }
  }

  // untested delete function
  function destroy(project) {
    let projects = retrieve()
    projects = projects.filter(p => p !== item)
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  return { save, retrieve, newProjectID, update };
}

export { storage }