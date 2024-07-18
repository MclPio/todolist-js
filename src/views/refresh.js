import { projectIndex } from "./project";
import { projectNew } from "./project/new";
import { projectShow } from "./project/show";
import { projectEdit } from "./project/edit";
import { Storage } from "../modules/storage";


// function to refresh DOM, currentProjectID
function refresh(){
  const content = document.getElementById('content').innerHTML = '';
  Storage.clean();
  skeleton();
  projectIndex();
  projectNew();
  projectShow();
  todoNew();
  projectEdit();
  defaultProject();


  //set currentProjectID to default project
}

export { refresh };