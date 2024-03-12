var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//making a array if countries and prints its orignal order
var countriesToVisit = ["china", "Demark", "Brazil", "Argintina"];
console.log("orignal order:", countriesToVisit);
//print the array in alphabetical order without modifing the actual array list
console.log("Alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
//show that the array is still in orignal order
console.log("still in orignal order:", countriesToVisit);
//print the array in reversed order without modifing the actual array list
console.log("reverse order:", __spreadArray([], countriesToVisit, true).reverse());
//show that the array is still in orignal order
console.log("still in orignal order:", countriesToVisit);
//we have change the orginal array now
console.log("orignal array reversed:", countriesToVisit.reverse());
//print the array to show that it's back to its orginal order
console.log("back to orginal order:", countriesToVisit.reverse());
//print the array to show that its order has been changed in alphabetical order now
console.log("sorted in alphabetical order:", countriesToVisit.sort());
//we have change again the orginal array now
console.log("orignal array reversed:", countriesToVisit.reverse());
