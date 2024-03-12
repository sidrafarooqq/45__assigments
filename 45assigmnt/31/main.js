var usernNames = ["Mahad", "Ali", "Admin", "zeeshan", "usman"];
usernNames = [];
if (usernNames.length === 0) {
    console.log("your array is empaty, we need to find some users.");
}
else {
    usernNames.forEach(function (oneuser) {
        if (oneuser === "Admin") {
            console.log("hello ".concat(oneuser, ", would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneuser, ", thankyou for log in again."));
        }
    });
}
