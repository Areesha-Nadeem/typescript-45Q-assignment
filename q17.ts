//question no 17
/*Shrinking Guest List: You just found out that your new dinner table won’t 
arrive in time for the dinner, and you have space for only two guests.*/

let Glist=["Imra","laiba","hina","esha","kinza","iqra"];

// remove guest until 2 name remains  in your list
for(let i=0;i<4;i++){
    console.log(Glist.pop(), " Soory! i can invite only 2 people for dinner");
}

//print messg for still invited guest
for(let i=0;i<Glist.length;i++){
    console.log(Glist[i]," you are still invited for dinner");
}


for(let i=0;i<=Glist.length;i++){
    console.log(Glist.pop());
   
}
console.log("The guestlist is ", Glist);