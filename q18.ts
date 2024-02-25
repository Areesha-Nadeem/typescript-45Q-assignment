//question no 18
/* Seeing the World: Think of at least five places in 
the world you’d like to visit.*/

let place=["Merewether Clock Tower","Rohtas Fort","Kagan Valley","Skardu","Fairy Meadows"]
console.log(place);

// array in alphabetical order without modifying the actual list.
let sortplace =[...place].sort();
console.log("array in alphabetical order", sortplace);

// array is still in its original order by printing it.
console.log(" original order", place);

//array in reverse alphabetical order without changing the order of the original list.
let reverseorder= [...place].sort().reverse();
console.log("in reverse order", reverseorder);

//original order
console.log(" original order", place);

//Print the array to show that its order has changed.
place=place.reverse()
console.log("array in reverse order",place);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
place=place.reverse()
console.log("again array in reverse order",place);

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
place = place.sort()
console.log("in sort alphabtical order", place);

// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
place =place.reverse();
console.log(" reverse alphabatical order",place);

console.log("\n the array in orignal order");
const nplaces= place.concat().reverse();
console.log(nplaces);