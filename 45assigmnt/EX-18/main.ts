//making a array if countries and prints its orignal order
let countriesToVisit : string[] = ["china", "Demark" ,"Brazil","Argintina"];
console.log("orignal order:", countriesToVisit );
//print the array in alphabetical order without modifing the actual array list
console.log( "Alphabetical order:", [...countriesToVisit].sort());
//show that the array is still in orignal order
console .log ( "still in orignal order:", countriesToVisit);
//print the array in reversed order without modifing the actual array list
console.log("reverse order:", [...countriesToVisit].reverse());
//show that the array is still in orignal order
console .log ( "still in orignal order:", countriesToVisit);

//we have change the orginal array now
console.log("orignal array reversed:", countriesToVisit.reverse());

//print the array to show that it's back to its orginal order
console.log("back to orginal order:", countriesToVisit.reverse());
//print the array to show that its order has been changed in alphabetical order now
console.log("sorted in alphabetical order:", countriesToVisit.sort());


//we have change again the orginal array now

console.log("orignal array reversed:", countriesToVisit.reverse());