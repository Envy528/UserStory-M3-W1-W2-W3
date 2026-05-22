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

// ==================== Task 5 ====================
//Validation and testing

//products object array
let invalidProduct = false;
for (const product of products){
    if (!product.id || !product.name || !product.price || !product.category){ // Checking if any data is invalid
        console.log("The product is missing data");
        invalidProduct = true;
    } else if (typeof product.price !== "number" || product.price <= 0){ // Checking if the price is a valid number
        console.log("The product have an invalid price");
        invalidProduct = true;
    }
}
if (!invalidProduct){
    console.log("All products are valid");
}

//Set of numbers
if (numbers.size === 0){ // Checking if the set is empty
    console.log("The set is empty");
} else {
    let invalidNumberInSet = false;
    for (const number of numbers){
        if (typeof number !== "number"){ // Checking if the number is a valid number
            console.log(`The value in ${number} is not a valid number`);
            invalidNumberInSet = true;
        }
    }
    if (!invalidNumberInSet){
        console.log("All numbers in the set are valid");
    }
}

// Map of products
if (productsMap.size === 0){ // Checking if the map is empty
    console.log("The map is empty");
} else {
    let invalidCategoryInMap = false;
    productsMap.forEach((name, category) => {
        if (!name || !category){ // Checking if any data is invalid
            console.log("The map have missing data");
            invalidCategoryInMap = true;
        } else if (typeof name !== "string" && !Array.isArray(name) || typeof category !== "string"){ // Checking if the name if a valid string or an array of strings and if the category is a valid string
            console.log(`The value in ${name} or ${category} is not a valid string`);
            invalidCategoryInMap = true;
        }
    });
    if (!invalidCategoryInMap){
        console.log("All categories in the map are valid");
    }
}