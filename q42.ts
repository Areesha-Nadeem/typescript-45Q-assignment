//question no 42
/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of
magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.
*/
 
let magicians :string[]=['David Blaine','Dynamo','Criss Angel','Criss Ange'];

//function showmagician() 
function showmagician(magicians:string[]):any {
    for(let i=0;i<magicians.length;i++){
        console.log(magicians[i]);
    }
}
function make_great(magicians:string[]): any {
    for(let i=0; i<magicians.length;i++)
     magicians[i]="the great to magician "+ magicians[i];
}


//original magician list
console.log("origina list ");
showmagician(magicians)

//new magician list
console.log("new list ");
make_great(magicians);
showmagician(magicians);
