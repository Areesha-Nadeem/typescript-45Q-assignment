//question no 32
/*Checking Usernames: Do the following to create a program that simulates
how websites ensure that everyone has a unique username. */

let current_users=["adam","eric","admin","john"];

let new_users=["amna","eric","saba","john"];

for(let i=0; i<4; i++){
// i=current_users
 for(let j=0; j<new_users.length;j++){
    if (new_users[j]== current_users[i]){
        console.log(`${new_users[j]},the person will need to enter a new username.`);
    }

    else{
        console.log(`${new_users[j]}, available for new user`);
    }
}
}
