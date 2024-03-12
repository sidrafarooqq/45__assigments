let guestlist =["eman","muqaddas","ruba","uzma"];

let dontCome= guestlist[0];

console.log( dontCome,"never join us");

guestlist.splice(0,1, "rida" );


guestlist.forEach(guest => console.log(`salam ${guest},would you like to dinnr with me?`));