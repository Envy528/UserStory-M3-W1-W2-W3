// Variable declaration and user input
const name = prompt("Enter your name");
const age = Number(prompt("Enter your age"));

// Check if the age is a valid number
if (isNaN(age)) {
    console.error("Error: Por favor, ingresa una edad válida en números.");
}