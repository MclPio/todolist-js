function checkStyle() {
  const checkButtons = document.getElementsByClassName('check-button')
  for (let i = 0; i < checkButtons.length; i++){
    let target = checkButtons[i];
    console.log(checkButtons[i].dataset.priority)
    target.classList.add(`priority-${target.dataset.priority}`)
  }
}

export { checkStyle }