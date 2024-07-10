import { Project } from "./project";

function storage() {
  function retrieve() {
    const tempProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    let projects = [];
    for (let i = 0; i < tempProjects.length; i++) {
      projects.push(new Project(tempProjects[i].name, tempProjects[i].todos));
    }
    return projects;
  }

  function save(newProject) {
    let projects = retrieve()
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  // untested delete function
  function destroy(project) {
    let projects = retrieve()
    projects = projects.filter(p => p !== item)
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  return { save, retrieve };
}

export { storage }