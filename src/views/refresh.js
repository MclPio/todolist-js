import { projectIndex } from "./project";
import { projectNew } from "./project/new";
import { projectShow } from "./project/show";
import { projectEdit } from "./project/edit";
import { Storage } from "../modules/storage";


// function to refresh DOM, currentProjectID
function refresh(){
  Storage.clean();
  // rebuild dom with old project selected??
  

  //set currentProjectID to default project
}

export { refresh };