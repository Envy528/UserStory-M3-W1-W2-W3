// Variable declaration and user input
const name = prompt("Enter your name");
const age = Number(prompt("Enter your age"));

// Check if the age is a valid number
if (isNaN(age)) {
    console.error("Error: Please, enter a valid age in numbers.");
} else {
    if (age < 0 || age > 120) {
        alert("Error: Please, enter a realistic age between 0 and 120.");
        console.error("Error: Please, enter a realistic age between 0 and 120.");
    } else if (age < 18) {
        alert(`Hello ${name}, you are a minor. Keep learning and enjoying coding!`);
        console.log(`Hello ${name}, you are a minor. Keep learning and enjoying coding!`);
    } else if (age >= 18){
        alert(`Hello ${name}, you are an adult. Prepare for great opportunities in the world of programming!`);
        console.log(`Hello ${name}, you are an adult. Prepare for great opportunities in the world of programming!`);
    }
}