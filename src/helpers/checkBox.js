import { TodoController } from "../controllers/todo";
import { Storage } from "../modules/storage";
import { refresh } from "../views/refresh";

function checkBox() {
  const checkButtons = document.getElementsByClassName('check-button')
  for (let i = 0; i < checkButtons.length; i++){
    let target = checkButtons[i];
    target.classList.add(`priority-${target.dataset.priority}`)
    target.addEventListener('click', () => {
      TodoController.toggleComplete(target.dataset.index, Storage.getCurrentProject());
      refresh();
    });
  }
}

function checkMark(){
  const checkButtons = document.getElementsByClassName('check-button')
  for (let i = 0; i < checkButtons.length; i++) {
    let target = checkButtons[i];
    let todo = Storage.getTodo(target.dataset.index, Storage.getCurrentProject());
    
    if (todo.complete) {
      target.innerText = '✓'
    } else {
      target.innerText = ''
    }
  }
}

export { checkBox, checkMark }