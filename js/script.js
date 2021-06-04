
// Get all elements 
const keys = document.querySelector('.calculator-body');
const displayPath = document.querySelector('#result-path');


// adding event listener via delegation pattern

keys.addEventListener('click', e => {
  if(e.target.matches('button')) {
  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const displayedNumber = displayPath.textContent;
  
  if(!action) {
    if(displayedNumber === '') {
      displayPath.textContent = keyContent; 
    } else {
      displayPath.textContent = displayedNumber + keyContent;
    }
  }
  
  

  
  }
})





