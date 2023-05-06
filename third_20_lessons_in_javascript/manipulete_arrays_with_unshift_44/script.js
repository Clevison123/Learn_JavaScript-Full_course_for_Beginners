//Example 
var ourArray = ["Stimpson", "J", ["cat"]];
ourArray.shift(); //ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
//ourArray now equals ["Happy", "J", "Cat"]

//setup
var myArray = [["john", 23], ["dog", 3]];
myArray.shift();

//Only change code below this line.
myArray.unshift(["Paul", 35]);

console.log(myArray)