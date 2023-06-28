// 1
/* This is a
multi-line comment */ 

// 2
var myName;

// 3
var a;
a = 7 

// 4
var a
var b = a

// 5
var myVar = 0;
var a = 9

// 6
var myFirstName = 'Bon'
var myLastName  = "Jovi";

// 7
var a = 5;
var b = 10;
var c = "I am a"; 

// Do not change the code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

// 8
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 9
let catName = "Oliver";
let catSound = "Meow!";

// 10
const FCC = "freeCodeCamp";
let fact = "is cool!";
// fact = "is awesome!"; 
console.log(FCC, fact);

// 11
const sum = 10 + 10;

// 12
const difference = 45 - 33;
console.log(difference); 

// 13 
const product = 8 * 10;
console.log(product); 

// 14
const quotient = 66 / 33;
console.log(quotient);

// 15
let myVar = 11;
// Only change code below this line
myVar--;
console.log(myVar); 

// 16
const myDecimal = 5.7;

// 17
const product = 2.0 * 2.5;

// 18
const quotient = 4.4 / 2.0;

// 19
const remainder = 11 % 3;

// 20
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;

// 21
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// 22
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

// 23
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

// 24
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// 25
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// 26
const myStr = 'FirstLine\n\t\\SecondLine\nThirdLine';

// 27
const myStr = "This is the start. " + "This is the end.";

// 28
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// 28 
const myName = "Your Name";
const myStr = "My name is " + myName + " and I am well!";

//  29
const someAdjective = "fun";
let myStr = "Learning to code is ";
myStr += someAdjective;

// 30

let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

// 31
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

// 32
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World";
// Only change code above this line

// 33
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2];

// 34
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2];

// 35

const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1];

// 36
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// 37
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// 38
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2];

// 39
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
// Only change code above this line

// 40
// Only change code below this line
const myArray = ["Hello", 42];
// Only change code above this line

// 41
// Only change code below this line
const myArray = [["apple", "banana", "orange"], [1, 2, 3]];
// Only change code above this line

// 42

const myArray = [50, 60, 70];

// Only change code below this line
const myData = myArray[0];
// Only change code above this line

// 43
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;
// Only change code above this line


// 44
const myArray = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];


// 45
const myArray = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9],
[[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];


// 46
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);
// Only change code above this line

// 47
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray.pop();
// Only change code above this line

console.log(removedFromMyArray);


// 48
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();
// Only change code above this line

console.log(removedFromMyArray);


// 49
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

console.log(myArray);


// 50
const myList = [
  ["Chocolate Bar", 15],
  ["Milk", 2],
  ["Apples", 10],
  ["Bread", 3],
  ["Eggs", 12]
];

console.log(myList);
