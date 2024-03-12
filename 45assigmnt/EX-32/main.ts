let current_users : string [] = ["admin","Eric","Ali","Hamza","fatima"];
let new_users : string [] = ["admin","fatima","Aliza","Hammad", "Noor"];

let current_users_lower : string[] = current_users.map(user => user.toLowerCase());

for(let new_user of new_users){
    if(current_users_lower.includes (new_user.toLowerCase())){
        console.log(`sorry, ${new_user}, that name is taken`)
    }
    else{
        console.log(`yes, ${new_user} is still in available list`)
    }


}