import { add } from 'date-fns';
import { Storage } from '../modules/storage';
function setStorage() {
  if (!localStorage.getItem('expiryDate')){
    const expiryDate = add(new Date(), {weeks: 1})
    localStorage.setItem('expiryDate', JSON.stringify(expiryDate.toISOString()));   
  }
}

function checkStorage(){
  const storage = JSON.parse(localStorage.getItem('expiryDate'))
  const currentDate = new Date()

  const expiryDate = new Date(storage);
  console.log(currentDate, expiryDate)
  if (currentDate > expiryDate) {
    localStorage.removeItem('expiryDate');
    setStorage();
    Storage.destroyAllCompleted();
  }
}

export { setStorage, checkStorage }