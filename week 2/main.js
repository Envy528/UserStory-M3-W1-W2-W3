// ======================= Task 1 ====================
// Array with objects of products
const products = [{id:1,name:"Desk",price:1500000, category:"Furniture"},
    {id:2,name:"Celphone",price:800000, category:"Electronics"},
    {id:3,name:"Computer",price:2300000, category:"Electronics"}]

// ======================= Task 2 ======================
// Use of set in JavaScript
const numbers = new Set([1,1,1,2,2,3,3,4,5,6,]);
console.log(numbers, "Set erases duplicated numbers");

numbers.add(7); // Method to add 7 to the numbers set
console.log(numbers, "Added Number 7")

console.log(numbers.has(1)); // Method to verify if 1 is in the numbers set

numbers.delete(6); // Method to delete an item from the set
console.log(numbers, "Number 6 is deleted");

for (const number of numbers){
    console.log(number); // Prints every number in the set
}

// =========================== Task 3 =======================
// Creation of a Map
const productsMap = new Map();

productsMap.set("Furniture", products[0].name);
productsMap.set("Electronics", [products[1].name, products[2].name]); // products category and array of the products name so the map can store both products name

console.log(productsMap, "Map created");

// =============================== Task 4 =========================
// Iteration on data structures
//For in
for (let i = 0; i < products.length; i++){ // First I take the indexes of the array
    for (const value in products[i]){ // And here I iterate each product
        console.log(`${value}: ${(products[i])[value]}`); // Shows the keys and it's values
    }
}

//For of
for (const number of numbers){ // Goes inside the Set and takes every item
    console.log(number) // Shows every item
}

// ForEach
productsMap.forEach((name, category) => { // Goes inside the Map and takes the category and the name of the products
    console.log(`${category}: ${name}`); // Shows the category and the name of the products
})