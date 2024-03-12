//define variables
var apple = "apple";
var uppercaseapple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "mango", "banana",];
//test for equality and inequality with strings
console.log("is apple is equal to apple?");
console.log(apple == "apple");
console.log("\napple is not equal to apple?");
console.log(apple != "apple");
//test using lowercase function
console.log("\nis APPLE is  equal to apple after converting to lowercase? ");
console.log(uppercaseapple.toLowerCase() == "apple");
console.log("\nis APPLE is not equal to apple after converting to lowercase? ");
console.log(uppercaseapple.toLowerCase() != "apple");
//numerical test
//euqal to
console.log("\n ten is equal to twenty?");
console.log(ten == twenty);
//not euqal to
console.log("\n ten is not equal to twenty?");
console.log(ten != twenty);
//greater than
console.log("\nten is greater than zero?");
console.log(ten > 0);
//less than
console.log("\ntwenty is less than 10?");
console.log(twenty < ten);
//greater than or equal to
console.log("\nis ten is greater than or equal to 5?");
console.log(ten >= 5);
//less than ot equal to
console.log("\nis twenty is less than or equal to 10?");
console.log(twenty <= 10);
//test using "and" & "or" operators
//using && (AND)
console.log("twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("twenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 30);
//usng || (OR));
console.log("\n 20 is greater than 50 OR 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20);
//test wheather an items is include in array
console.log("is apple includes in my fruits array?");
console.log(fruits.includes("apple"));
//not includes
console.log("is apple  not includes in my fruits array?");
console.log(!fruits.includes("apple"));
