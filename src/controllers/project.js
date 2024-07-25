import { Storage } from '../modules/storage'
import { refresh } from '../views/refresh';

class ProjectController {
  static update(projectId, projectName) {
    let project = Storage.getProject(projectId);
    project.name = projectName;
    Storage.update(project);
    refresh();
  }

  static destroy(projectId) {
    Storage.destroy(projectId);
    refresh();
  }
}

export { ProjectController };