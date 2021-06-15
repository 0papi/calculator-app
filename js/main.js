function getInputValue() {
  let input = event.target.innerText;
  console.log(input);
  printValue(input);
}

// print calculator values to display path

function printValue(val) {
  let displayOuput = document.querySelector("#calculator-screen");
  let currentOutput = displayOuput.value;

  if (displayOuput.value == "0") {
    if (val != "RESET" && val != "DEL") {
      displayOuput.value = "";
      displayOuput.value += val;
    }
  } else {
    if (val == "DEL") {
      displayOuput.value = currentOutput.slice(0, -1);
      if (displayOuput.value.length <= 1) {
        displayOuput.value = "0";
      }
    }

    if (val != "RESET" && val != "DEL" && val != "=") {
      displayOuput.value = displayOuput.value + val;
    }

    if (val == "RESET") {
      displayOuput.value = "0";
    }

    //  add formula via new function called eval()
    if (val == "=") {
      let res = displayOuput.value;
      displayOuput.value = eval(res);
    }
  }
}

// selecting main calculator Keys

let calculatorButtons = document.getElementsByTagName("button");
for (let i = 0; i < calculatorButtons.length; i++) {
  calculatorButtons[i].setAttribute("onclick", "getInputValue()");
}

// adding functionality to theme bar

const circle = document.querySelector(".circle");
const mainBody = document.querySelector("body");


circle.addEventListener("click", continueCirlce);

function continueCirlce() {
  if(mainBody.classList.contains("light-theme")){
    mainBody.classList.remove("light-theme");
    mainBody.classList.add("purple-theme");
  }else if(mainBody.classList.contains("purple-theme")){
    mainBody.classList.remove("purple-theme"); // if purple theme is on then when clicked reset back to default theme
  }else{
    mainBody.classList.add("light-theme");
  }
}
