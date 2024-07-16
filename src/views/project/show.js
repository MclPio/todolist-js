import { Todo } from "../../modules/todo";
import { Storage } from "../../modules/storage";

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
  // render last used project
  projectToDOM(Storage.getProject(localStorage.getItem('currentProjectID')));
  const elements = document.getElementsByClassName('project-button');

  for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', ()=>{
      let projectID = (elements[i].dataset.id);
      Storage.setCurrentProjectID(projectID);
      projectToDOM(Storage.getProject(projectID))    
    })
  }
}


export { projectShow };
