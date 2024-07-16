import './css/style.css';
import 'material-symbols';
import { skeleton } from "./helpers/skeleton.js";
import { projectNew } from "./views/project/new.js";
import { projectIndex } from './views/project/index.js';
import { projectShow } from './views/project/show.js';
import { todoNew } from './views/todo/new.js';

skeleton();
projectIndex();
projectNew();
projectShow();
todoNew();
