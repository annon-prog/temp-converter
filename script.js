//Defining our variables.
let celsiusInput = document.getElementById("celsius");
let kelvinInput = document.getElementById("demo");
let button = document.getElementById("btn");

//function to store our input and generate a converted input.

const storeTemp = () => {
  let message = celsiusInput.value;
  let newValue = Number(message) + 273.15;
  displayTemp(newValue);
};

//function to display our generated output.

const displayTemp = (newValue) => {
  kelvinInput.textContent = newValue;
};

button.addEventListener("click", storeTemp);
