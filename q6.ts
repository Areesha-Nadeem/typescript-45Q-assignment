//question no 6
/*Stripping Names: Store a person’s name, and include some whitespace 
characters at the beginning and end of the name. Make sure you use each 
character combination, "\t" and "\n", at least once. Print the name once, so 
the whitespace around the name is displayed. Then print the name after 
striping the white spaces.
*/

let personName = "\t   Allama Iqbal\n";
console.log( personName);
// Printing the name with whitespace
console.log("Name with whitespace:");
console.log(JSON.stringify(personName));  // JSON.stringify to display special characters like '\t' and '\n'
// Stripping whitespaces from the name
let strippedName = personName.trim();
// Printing the name after stripping whitespaces
console.log("\nName after stripping whitespace:");
console.log(JSON.stringify(strippedName));
