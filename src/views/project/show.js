import { Todo } from "../../modules/todo";
import { Storage } from "../../modules/storage";

// displays the todolist on the dom...
// index through all the todos and display to dom

// displays button to add new todoitem to the app.
// FORM HERE!
// todo name
// todo description
// due Date
// Priority

//all the above should be centered with flex..

function projectToDOM(project){
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  const todoUl = document.createElement('ul');
  let todoArray = project.todos
  console.log(todoArray, project);
  for(let i = 0; i < todoArray.length; i++) {
    let item = todoArray[i];
    let todoObj = new Todo(item.title, item.description, item.dueDate, item.dueTime, item.priority);
    console.log(todoObj);
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
function showProject(){
  const elements = document.getElementsByClassName('project-button');
  
  for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener('click', ()=>{
      let projectID = (elements[i].dataset.id);
      projectToDOM(Storage.getProject(projectID))    
    })
  }
}


export { showProject };
