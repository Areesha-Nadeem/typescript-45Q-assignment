//question  no 34
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these 
pizza names in a array, and then use a for loop to print the name of 
each pizza. */

let favrtpizza=["Malai botti","margherita","BBQ chicken"];
console.log("Favorite Pizzas:");
for (let i = 0; i < favrtpizza.length; i++) {
    console.log(favrtpizza[i]);
}

console.log("\nStatements about Favorite Pizzas:");
for (let i = 0; i < favrtpizza.length; i++) {
    console.log(`I like ${favrtpizza[i]} pizza.`);
}
console.log("Pizza is one of my favorite fast food! I really love pizza!")