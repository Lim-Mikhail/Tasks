// 1 
function getChar(param) {
    return String.fromCharCode(param) 
}     
 
                                       
// 3                                
function greet(name) {                               
  if (name === "Johnny") {            
    return "Hello, my love!";                        
  }   
                  
  return "Hello, " + name + "!";
}


// 3
String.prototype.toAlternatingCase = function () {
  let result = "";
  for (let i = 0; i < this.length; i++) { 
    const char = this[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
};


// 4
function abbrevName(name) {
  const [firstName, lastName] = name.split(' ');
  const initials = `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
  return initials;
}

// 5
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let countPositives = 0;
  let sumNegatives = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositives++;
    } else if (input[i] < 0) {
      sumNegatives += input[i];
    }
  }

  return [countPositives, sumNegatives];
}


// 6
function filter_list(l) {
  return l.filter((element) => typeof element === 'number' && element >= 0);
}

// 7
function greet(name) {
  return "Hello, " + name + " how are you doing today?";
}

// 7
function friend(names) {
  return names.filter((name) => name.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);


// 8
function findNextSquare(sq) {
  // Check if the square root of sq is an integer
  const sqrt = Math.sqrt(sq);
  if (Number.isInteger(sqrt)) {
    // Find the next perfect square
    const nextSquare = Math.pow(sqrt + 1, 2);
    return nextSquare;
  } else {
    return -1;
  }
}


// 9
function SeriesSum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }
  return sum.toFixed(2);
}


// 10
function fakeBin(x) {
  return x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1');
}



// 11
function solution(str, ending) {
  return str.endsWith(ending);
}


// 12
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

// 13
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];
    for (let i = 1; i < args.length; i++) {
      if (args[i] < smallest) {
        smallest = args[i];
      }
    }
    return smallest;
  }
}


// 14
var min = function(list) {
  let minimum = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < minimum) {
      minimum = list[i];
    }
  }
  return minimum;
}

var max = function(list) {
  let maximum = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > maximum) {
      maximum = list[i];
    }
  }
  return maximum;
}


// 15
function isPangram(string) {
  // Create a set to track the unique letters present in the string
  const letters = new Set();

  // Convert the string to lowercase and iterate over each character
  for (let char of string.toLowerCase()) {
    // Check if the character is a letter (a-z)
    if (/[a-z]/.test(char)) {
      // Add the letter to the set
      letters.add(char);
    }
  }

  // Check if the number of unique letters is equal to 26 (the total number of letters in the alphabet)
  return letters.size === 26;
}


// 16
function digitize(n) {
  return Array.from(String(n), Number).reverse();
}


// 17
function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b;
}


// 18
function findNeedle(haystack) {
  const index = haystack.indexOf("needle");
  return "found the needle at position " + index;
}


// 19
function addBinary(a, b) {
  const sum = a + b;
  return sum.toString(2);
}


// 20
function accum(s) {
  return s
    .split('')
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join('-');
}



