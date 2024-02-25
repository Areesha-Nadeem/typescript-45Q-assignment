//question no 44
/*Sandwiches: Write a function that accepts a array of items a person 
wants on a sandwich. The function should have one parameter that collects 
as many items as the function call provides, and it should print a summary 
of the sandwich that is being ordered. Call the function three times, 
using a different number of arguments each time. */
// function make_sandwich(...items) {
//     console.log("Sandwich with:");
//     items.forEach(item => console.log("- " + item));
// }

// make_sandwich("Ham", "Cheese", "Lettuce");
// make_sandwich("Turkey", "Swiss Cheese");
// make_sandwich("Peanut Butter", "Jelly");

function make_sandwich(...items:string[]) {
    console.log("Sandwich with:");
    items.forEach(item => console.log("- " + item));
}

make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss Cheese");
make_sandwich("Peanut Butter", "Jelly");
