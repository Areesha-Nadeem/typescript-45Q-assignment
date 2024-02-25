//question no 15
/*Changing Guest List: You just heard that one of your guests can’t make the 
dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the 
end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with
 the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still
 in your list.*/

 let guests=["laiba","esha","hina"];
console.log (`Guest name: ${guests}\n`);
for(let i=0; i<guests.length; i++){
    console.log (`Hey! whatsup?`, guests[i], `I would be delighted if you join me for a lovely dinner `);
}
console.log(`sorry`, guests[2],`the dinner is cancel due to an issue`);

//for removing 
console.log( guests.pop());
console.log(guests);
//for add element in an array 
 //let new_glist=guests.push("Kinza");
  //console.log(new_glist);
  //console.log(guests);
 let new_glist=guests.splice(2,2,"Kinza");
 console.log (guests);

 //make a new invitaion 
 console.log("new list of invitation");
 for(let j=0; j<guests.length; j++){
    console.log (`Hey! whatsup?`, guests[j], `I'm very glad to see you at my home for dinner at 8 o'clock`);
 }