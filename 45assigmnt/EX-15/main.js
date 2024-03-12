var guestlist = ["eman", "muqaddas", "ruba", "uzma"];
var dontCome = guestlist[0];
console.log(dontCome, "never join us");
guestlist.splice(0, 1, "rida");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ",would you like to dinnr with me?")); });
