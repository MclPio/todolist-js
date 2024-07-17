import { Todo } from "../../modules/todo";
import { Storage } from "../../modules/storage";
import { el } from "date-fns/locale";

// NEED TO SHOW CURRENT PROJECT AFTER REFRESH
function projectToDOM(project){
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  const todoUl = document.createElement('ul');
  let todoArray = project.todos
  for(let i = 0; i < todoArray.length; i++) {
    let item = todoArray[i];
    let todoObj = new Todo(item.title, item.description, item.dueDate, item.dueTime, item.priority);
    // write code to insert todo obj to dom maybe call todo/show?
    const todoLi = document.createElement('li');
    todoLi.innerText = todoObj.title
    todoUl.append(todoLi);
  }
  todoList.append(todoUl);
}

/**
 * shows project todos in dom todo-list
 */
function projectShow(){
  if (!localStorage.getItem('currentProjectID')) {
    if(localStorage.getItem('currentProjectID') != 0) {
      return;
    }
  }
  // render last used project
  const lastProject = Storage.getProject(localStorage.getItem('currentProjectID'));
  projectToDOM(lastProject);
  updateProjectName(lastProject.name);

  const elements = document.getElementsByClassName('project-button');
  
  for(let i = 0; i < elements.length; i++){
    if (elements[i].dataset.id == lastProject.id) {
      setSelected(elements[i].parentNode);
    }
    elements[i].addEventListener('click', ()=>{
      removeSelected(elements);
      let projectID = (elements[i].dataset.id);
      Storage.setCurrentProjectID(projectID);
      projectToDOM(Storage.getProject(projectID));
      setSelected(elements[i].parentNode);
      updateProjectName(elements[i].innerText);
    })
  }
}

// adds selected class on current project
function setSelected(node) {
  node.classList.add('selected');
}

function removeSelected(nodes) {
  for (let i=0; i < nodes.length; i++) {
    nodes[i].parentNode.classList.remove('selected');
  }
}

function updateProjectName(name) {
  const projectName = document.getElementById('project-name');
  projectName.innerText = name;
}


export { projectShow };