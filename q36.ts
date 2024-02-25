//question no 36
/*T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should 
print a sentence summarizing the size of the shirt and the message printed
on it. Call the function. */

// function make_shirt(size:number, messg: string){

// console.log(size,messg);
// }

// console.log(make_shirt(32, "Blieve in \n  your POWER "));
function make_shirt(size:string, message:string) {
    console.log(`The shirt is ${size} and it says: ${message}`);
}

make_shirt("small", "Blieve in your dreams");
