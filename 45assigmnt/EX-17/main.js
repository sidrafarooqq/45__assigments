//creating a guestlist aarray
var guestlist = ["eman", "muqaddas", "uzma", "ruba"];
//making a guestlist who cant come
var dontcome = guestlist[0];
//print a guest name who cant come
console.log(dontcome, " nhi asakty hain");
//add or remove values from guest list aarray
guestlist.splice(0, 1, "rida");
//message print for bigger table
console.log("goog news! we found a bigger table for dinner.");
//adding a new guest at starting index of array
guestlist.unshift("alii");
//adding a new guest at ending index of array
guestlist.push("zain");
//making a variable for storing a middle index of oue guest list array
var middleIndex = Math.floor(guestlist.length / 2);
//adding a new guest at middle index of array
guestlist.splice(middleIndex, 0, "fatima");
//print message for update list
console.log("update list of oue guest");
//sending a invitation message to our guest one by one with their name
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ",would you like to dinner with me?")); });
//inform that only two guest ivited for dinner
console.log(" unfortunately , the new dinner table wont arrive on time , so i can invite only two guest to dinner with me");
//using while loop to remove the guest from array until only two names remaining
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("sorry ".concat(removedGuest, ", i cant invited you to dinner"));
}
//sending a invitation to the last two guest on the list
console.log("invitation to the last two guest");
guestlist.forEach(function (lasttwo) { return console.log("luckily ".concat(lasttwo, " , you are still invited to dinner")); });
//removing last two guest from the list
guestlist.pop();
guestlist.pop();
console.log("Empty list:", guestlist);
