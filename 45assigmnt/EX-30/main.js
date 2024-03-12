//creating a array
var userName = ["Mahad", "Ali", "Admin", "Zeeshan", "Usman"];
//using foreach loop on array
userName.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("hello ".concat(oneuser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, ", thankyou for log in again."));
    }
});
