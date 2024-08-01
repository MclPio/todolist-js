import { projectIndex } from "./project";
import { projectNew } from "./project/new";
import { projectShow } from "./project/show";
import { projectEdit } from "./project/edit";
import { Storage } from "../modules/storage";
import { skeleton } from "../helpers/skeleton"
import { todoNew } from "../views/todo/new"
import { defaultProject } from "../helpers/defaultProject"
import { todoEdit } from "../views/todo/edit";
import { checkBox } from "../helpers/checkBox";
import { checkStorage, setStorage } from "../helpers/expireCompleted";


// function to refresh DOM, currentProjectID
function refresh(){
  const content = document.getElementById('content');
  content.innerHTML = '';
  defaultProject();
  Storage.clean();
  skeleton();
  projectIndex();
  projectNew();
  projectShow();
  todoNew();
  projectEdit();
  todoEdit();
  checkBox();
  setStorage();
  checkStorage();
}

export { refresh };