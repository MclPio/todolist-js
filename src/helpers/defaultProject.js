import { Project } from "../modules/project";
import { Storage } from "../modules/storage";

function defaultProject() {
  if (!Storage.getProject('0')) {
    const myProject = new Project('Home', [], 0);
    Storage.save(myProject);
  }
}

export { defaultProject };
