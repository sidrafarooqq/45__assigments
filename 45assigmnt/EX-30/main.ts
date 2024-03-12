//creating a array
let userName =  ["Mahad","Ali","Admin","Zeeshan","Usman"];

//using foreach loop on array
userName.forEach(oneuser =>{
    if(oneuser === "Admin"){
        console.log(`hello ${oneuser}, would you like to see a status report?`)
    }else{
        console.log(`hello ${oneuser}, thankyou for log in again.`)
    }
})