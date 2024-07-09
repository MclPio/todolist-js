import { Project } from "./project";

function storage() {
  const projects = JSON.parse(localStorage.getItem("projects") || "[]");
  // retrieve projects and turn them into Project obj
  // Object.setPrototype(plain_object, House.prototype);
  const tempProjects = [];
  for (let i = 0; i < projects.length; i++) {
    tempProjects.push(new Project(projects[i].name, projects[i].todos));
  }


  function save(project) {
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  return { save, tempProjects };
}

export { storage }