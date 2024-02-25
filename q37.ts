//question no 37
/*Large Shirts: Modify the make_shirt() function so that shirts are large 
by default with a message that reads I love TypeScript. Make a large shirt
and a medium shirt with the default message, and a shirt of any size 
with a different message. */

function makeshirt(size: string,messg:string){

console.log(`the size of shirt is ${size} and it says:  ${messg}`);

}
makeshirt("large", "Believe in your power.😎")
//for medium size
makeshirt("medium", "Hello! world. 😊")
//for small size
makeshirt("small","Always be Happy. 😇")
