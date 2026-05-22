// Array with objects of products
const products = [{id:"1",name:"Televisor",price:1500000},
    {id:"2",name:"Celular",price:800000},
    {id:"3",name:"Computador",price:2300000}]

// Use of set in JavaScript
const numbers = new Set([1,1,1,2,2,3,3,4,5,6,]);
console.log(numbers, "Set erases duplicated numbers");

numbers.add(7); // Method to add 7 to the numbers set
console.log(numbers, "Added Number 7")

console.log(numbers.has(1)); // Method to verify if 1 is in the numbers set

numbers.delete(6); // Method to delete an item from the set
console.log(numbers, "Number 6 is deleted");

for (number of numbers){
    console.log(number); // Prints every number in the set
}