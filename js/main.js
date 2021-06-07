function getInputValue() {
  let input = event.target.innerText;
  console.log(input);
  printValue(input);
}



// print calculator values to display path

function printValue(val) {
  let displayOuput = document.querySelector('#calculator-screen');
  let currentOutput = displayOuput.value;

  if(displayOuput.value == "0") {
    if(val !="RESET" && val != "DEL") {
      displayOuput.value = "";
      displayOuput.value += val;
    }
  } else{
    if(val == "DEL") {
      displayOuput.value = currentOutput.slice(0, -1);
      if(displayOuput.value.length<=1){
        displayOuput.value = "0";
      }
    }

    if(val !="RESET" && val != "DEL" && val != "=") {
      displayOuput.value = displayOuput.value + val;
    }

    if(val == "RESET"){
      displayOuput.value = "0";
    }

   //  add formula via new function called eval()
   if(val == "=") {
     let res = displayOuput.value;
     displayOuput.value = eval(res)
   }


  }
}

// selecting main calculator Keys

let calculatorButtons = document.getElementsByTagName('button');
for(let i = 0; i < calculatorButtons.length; i++) {
  calculatorButtons[i].setAttribute('onclick', 'getInputValue()');
}




// adding functionality to theme bar

const circle = document.querySelector('.circle');
const numbers = document.querySelectorAll('.number');
const calcBody = document.querySelector('.calculator-body');
const mainBody = document.querySelector('body');
const displayOut = document.querySelector('.display-out');
const heading = document.querySelector('h1');
const progressBar = document.querySelector('.progress-bar');
const header = document.querySelector('h6');
const deleteButton = document.querySelector('.delete-items');
const resetButton = document.querySelector('.reset-items');
const equalButton = document.querySelector('.equalto-item');
const keyboardKey = document.querySelectorAll('.keyboard-key');


let currentValue = 1; 


circle.addEventListener('click', continueCirlce);

function continueCirlce() {
  currentValue ++;

  if(currentValue > numbers.length) {
    currentValue = numbers.length;
  }

  console.log(currentValue);

  if(currentValue == 2) {
    circle.style.transform = 'translateX(20px)';
    heading.style.color = '#000000';
    mainBody.style.backgroundColor = 'hsl(0, 0%, 90%)';
    calcBody.style.backgroundColor = 'hsl(0, 5%, 81%)';
    displayOut.style.backgroundColor = 'hsl(0, 0%, 93%)'; 
    displayOut.style.color = '#000000';
    progressBar.style.backgroundColor = 'hsl(0, 5%, 81%)';
    header.style.color = '#000000';
    deleteButton.style.backgroundColor = 'hsl(185, 58%, 25%)';
    resetButton.style.backgroundColor = 'hsl(185, 42%, 37%)';
    equalButton.style.backgroundColor = 'hsl(25, 98%, 40%)';
  }

  if(currentValue == 3) {
    circle.style.transform = 'translateX(50px)';

    heading.style.color = 'hsl(52, 100%, 62%)';
    mainBody.style.backgroundColor = 'hsl(268, 75%, 9%)';
    calcBody.style.backgroundColor = 'hsl(268, 71%, 12%)';
    displayOut.style.backgroundColor = 'hsl(268, 71%, 12%)'; 
    displayOut.style.color = 'hsl(52, 100%, 62%)';
    progressBar.style.backgroundColor = 'hsl(268, 71%, 12%)';
    circle.style.backgroundColor = 'hsl(177, 92%, 70%)';
    header.style.color = 'hsl(52, 100%, 62%)';

    deleteButton.style.backgroundColor = 'hsl(285, 91%, 52%)';
    deleteButton.style.boxShadow = '3px 3px hsl(285, 91%, 52%)'; 
    resetButton.style.backgroundColor = 'hsl(285, 91%, 52%)';
    equalButton.style.backgroundColor = 'hsl(176, 100%, 44%)';
    equalButton.style.color = '#000000';
  }



  

}

 




