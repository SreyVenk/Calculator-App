let displayElement = document.getElementById("display");
let currentInput = ""; // Keeps track of the current input
let lastResult = null; // Keeps track of the last result

function clearDisplay() {
  currentInput = "";
  lastResult = null;
  updateDisplay("0");
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput || "0");
}

function append(value) {
  if (value === "." && currentInput.includes(".")) return; // Prevent multiple dots
  currentInput += value;
  updateDisplay(currentInput);
}

function calculate() {
  try {
    let sanitizedInput = currentInput.replace("÷", "/").replace("×", "*");
    lastResult = eval(sanitizedInput); // Evaluate the expression
    updateDisplay(lastResult);
    currentInput = String(lastResult); // Allow chaining operations
  } catch (error) {
    updateDisplay("Error");
    currentInput = "";
  }
}

function updateDisplay(value) {
  displayElement.innerText = value;
}
