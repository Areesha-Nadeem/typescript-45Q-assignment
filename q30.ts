//question no 30
/*Hello Admin: Make a array of five or more usernames, including the name 
'admin'. Imagine you are writing code that will print a greeting to each 
user after they log in to a website.Loop through the array, and print
 a greeting to each user: */

 let username=["adam","eric","epic","admin","john"];

 for(let i=0;i<5;i++){
    if(i==3){
        console.log(`Hello ${username[3]} would you like to see a status report?`);
    }
   else{
    console.log(`Hello ${username[i]} thank you for logging in again.`);
   } 
 }