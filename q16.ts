//Questin no 16
/*More Guests: You just found a bigger dinner table, so now more space is 
available. Think of three more guests to invite to dinner.*/

let glist=["laiba","esha","Kinza"];
console.log("guest list is:",glist);

//for add guest in bignning
 glist.splice(0,0,"imra");
 console.log ("the new guest is whose in start of array is imra\n", glist);
 //for add gest in middle
 glist.splice(2,0,"Hina");
 console.log ("the new guest is whose in middle of array is Hina\n",glist);
 //for add guest in end
 glist.push("Iqra");
 console.log("the new guest is whose in end of array is Iqra\n",glist);
 //new invitation
 console.log("new invitation list:");
 for(let i=0; i<glist.length; i++){
    console.log (`Hey! `, glist[i], `I would be delighted if you join me for a lovely dinner `);
}