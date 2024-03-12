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
