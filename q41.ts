//question no 41
/*Magicians: Make a array of magician’s names. Pass the array to a
function called show_magicians(), which prints the name of each
magician in the array. */
function show_magician(array:string []): any{
    for(let j=0;j<array.length;j++){
    console.log(array[j]);
    }
return array;
}

   console.log(show_magician(['David Blaine','Dynamo','Criss Angel','Criss Ange','Derren Brown']));
