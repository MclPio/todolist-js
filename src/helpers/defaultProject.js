import { Project } from "../modules/project";
import { Storage } from "../modules/storage";

// make default project if does not exist, switch to it if current project is null
// for example: after a delete
function defaultProject() {
  if (!Storage.getProject('0')) {
    const myProject = new Project('Home', [], 0);
    Storage.save(myProject);
  }

  if (!Storage.getCurrentProject()) {
    console.log("gets called")
    Storage.setCurrentProjectID(0);
  }
}

export { defaultProject };
