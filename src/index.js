import { newProject } from "./views/project/new.js";
import { updateDOM } from './views/project/index.js';
import './css/style.css';
import 'material-symbols';
import { showProject } from './views/project/show.js';
import { skeleton } from "./helpers/skeleton.js";

skeleton();
updateDOM();
newProject();
showProject();
