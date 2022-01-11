// 1. Do the below programs in anonymous function & IIFE
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("a. Print odd numbers in an array");
let findOdd = function (arr) {
  arr.forEach((element) => {
    if (element % 2 !== 0) {
      console.log(element);
    }
  });
};
findOdd(arr);
console.log("b. Convert all the strings to title caps in a string array");
let str = "convert all the strings to title caps in a string array".split(" ");
for (let i = 0; i < str.length; i++) {
  str[i] = str[i][0].toUpperCase() + str[i].slice(1);
}
console.log(str.join(" "));

console.log("c. Sum of all numbers in an array");
(function (arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  console.log(sum);
})(arr);
console.log("d. Return all the prime numbers in an array");
const isPrime = (n) => {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
};

const primeNumbers = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isPrime(arr[i])) {
      continue;
    }
    result.push(arr[i]);
  }
  return result;
};
console.log(primeNumbers([2, 3, 5, 4, 10, 9, 7, 11, 19, 20]));

console.log("e. Return all the palindromes in an array");

function isPalindrome(num) {
  let str = "" + num;
  let len = str.length;
  for (let i = 0; i < +(len / 2, 10); i++) {
    if (str[i] != str[len - 1 - i]) return false;
  }
  return true;
}

function isPalinArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let ans = isPalindrome(arr[i]);
    if (ans) result.push(arr[i]);
  }
  return result;
}

let palindromes = isPalinArray([121, 131, 20]);
console.log(palindromes);

console.log("f. Return median of two sorted arrays of same size");
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
findMedianSortedArrays = function (nums1, nums2) {
  let n = nums1.length;
  let m = nums2.length;
  let mid = (n + m) / 2;
  let i = 0,
    j = 0;
  let before = 0,
    after = 0;
  while (i + j - 1 !== mid && i < n && j < m) {
    before = after;
    if (nums1[i] < nums2[j]) {
      after = nums1[i++];
    } else {
      after = nums2[j++];
    }
  }
  while (i + j - 1 !== mid && i < n) {
    before = after;
    after = nums1[i++];
  }
  while (i + j - 1 !== mid && j < m) {
    before = after;
    after = nums2[j++];
  }
  if ((n + m) % 2 === 0) {
    return (after + before) / 2;
  } else {
    return after;
  }
};
let median = findMedianSortedArrays(arr1, arr2);
console.log(median);
console.log("g. Remove duplicates from an array");

let removeDuplicate = function (arr) {
  let freq = {};
  for (let value of arr) {
    freq[value] = ++freq[value] || 1;
    if (freq[value] > 1) {
      continue;
    }
    console.log(value);
  }
};
removeDuplicate([1, 2, 2, 4, 5, 4]);
console.log("h. Rotate an array by k times");

let rotate = (arr, k) => {
  while (k != 0) {
    arr.push(arr.shift());
    k--;
  }
};

let array = [1, 2, 3, 4, 5, 6, 7];
rotate(array, 2);
console.log(array.join(" "));

// Problem:
// Write a function called “addFive”.
// Given a number, “addFive” returns 5 added to that number.

// Input:
// console.log(addFive(5));
// console.log(addFive(0));
// console.log(addFive(-5));
// Output:
// 10
// 5
// 0
var num = 10;
function addFive(num) {
  return num + 5;
}
var result = addFive(num);
console.log(result);
// Problem:
// Write a function called “getOpposite”.
// Given a number, return its opposite
// Input:
// console.log(getOpposite(5));
// console.log(getOpposite(0));
// console.log(getOpposite(-5));
// console.log(getOpposite("5a"));
// console.log(getOpposite(5.5));
// Output:
// -5
// 0
// 5
// -1
// -1
num = 5;
function getOpposite(num) {
  if (Number(num) !== num || (typeof num === "number" && num % 1 !== 0))
    return -1;
  return -1 * num;
}
result = getOpposite(num);
console.log(result);
// Problem:
// Fill in your code that takes an number minutes and converts it to seconds.
// Examples
// toSeconds(5) ➞ 300
// toSeconds(3) ➞ 180
// toSeconds(2) ➞ 120
var min = 5;
function toSeconds(min) {
  return min * 60;
}
var secs = toSeconds(min);
console.log(secs);
// Problem
// Create a function that takes a string and returns it as an integer.
// Examples
// toInteger(“6”) ➞ 6
// toInteger(“1000”) ➞ 1000
// toInteger(“12”) ➞ 12
var mystr = "5";
function toInteger(mystr) {
  return +mystr;
}
var myint = toInteger(mystr);
console.log(myint);
// Problem
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// Examples
// nextNumber(0) ➞ 1
// nextNumber(9) ➞ 10
// nextNumber(-3) ➞ -2
var mynxtint = 0;
function nextNumber(myint) {
  return myint + 1;
}
var myNextint = nextNumber(mynxtint);
console.log(myNextint);
// Problem
// Create a function that takes an array and returns the first element.
// Examples
// getFirstElement([1, 2, 3]) ➞ 1
// getFirstElement([80, 5, 100]) ➞ 80
// getFirstElement([-500, 0, 50]) ➞ -500
var arr2 = [1, 2, 3];
function getFirstElement(arr) {
  return arr2[0];
}
var data = getFirstElement(arr2);
console.log(data);
// Problem
// Convert Hours into Seconds
// Write a function that converts hours into seconds.
// Examples
// hourToSeconds(2) ➞ 7200
// hourToSeconds(10) ➞ 36000
// hourToSeconds(24) ➞ 86400
var hour = 24;
function hourToSeconds(hour) {
  return hour * 3600;
}
var hourstosecs = hourToSeconds(hour);
console.log(hourstosecs);
// Problem
// Find the Perimeter of a Rectangle
// Create a function that takes height and width and finds the perimeter of a rectangle.
// Examples
// findPerimeter(6, 7) ➞ 26
// findPerimeter(20, 10) ➞ 60
// findPerimeter(2, 9) ➞ 22
function findPerimeter(h, w) {
  return 2 * (h + w);
}
var peri = findPerimeter(6, 7);
console.log(peri);
// Problem
// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117
function lessThan100(num1, num2) {
  return num1 + num2 < 100;
}
var res = lessThan100(22, 15);
console.log(res);
// Problem
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// Examples
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9
// remainder(5, 5) ➞ 0
function remainder(num1, num2) {
  return num1 % num2;
}
res = remainder(1, 3);
console.log(res);
// Problem
// Old macdonald had a farm:
// MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// turkey = 2 legs
// horse = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
// Examples
// CountAnimals(2, 3, 5) ➞ 36
// CountAnimals(1, 2, 3) ➞ 22
// CountAnimals(5, 2, 8) ➞ 50
function CountAnimals(tur, horse, pigs) {
  return tur * 2 + horse * 4 + pigs * 4;
}
var legs = CountAnimals(2, 3, 5);
console.log(legs);
// Problem
// Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
// Examples
// frames(1, 1) ➞ 60
// frames(10, 1) ➞ 600
// frames(10, 25) ➞ 15000
function frames(minutes, fps) {
  return minutes * 60 * fps;
}
var totalFps = frames(1, 2);
console.log(totalFps);
// Problem
// Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
// Examples
// divisibleByFive(5) ➞ true
// divisibleByFive(-55) ➞ true
// divisibleByFive(37) ➞ false
function divisibleByFive(num1) {
  return num1 % 5 === 0;
}
var divisible = divisibleByFive(5);
console.log(divisible);
// Problem:
// Write a function called “isEven”.
// Given a number, “isEven” returns whether it is even.

// Input:
// isEven(12);
// isEven(0);
// isEven(11);
// isEven(“11h”);
// Output:
// true
// true
// false
// -1

function isEven(num) {
  return num % 2 === 0;
}
var even = isEven(5);
console.log(even);
// Problem:
// Write a function called “areBothOdd”.
// Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

// Input:
// areBothOdd(1, 3);
// areBothOdd(1, 4);
// areBothOdd(2, 3);
// areBothOdd(0, 0);
// Output:
// true
// flase
// flase
// flase

function areBothOdd(num1, num2) {
  return num1 % 2 === 1 && num2 % 2 === 1;
}
console.log(areBothOdd(1, 3));
// Problem:
// Write a function called “getFullName”.
// Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

// Input:
// getFullName(“GUVI”, “GEEK”);
// getFullName(“GUVI”, );
// getFullName(, “GEEK”);
// getFullName(“”, “”);
// Output:
// “GUVI GEEK”
// “GUVI”
// “GEEK”
// “”

function getFullName(firstName, lastName) {
  return (firstName + " " + lastName).trim();
}
console.log(getFullName("GUVI", "GEEK"));
// Problem:
// Write a function called “getLengthOfWord”.
// Given a word, “getLengthOfWord” returns the length of the given word.
// Input:
// getLengthOfWord(“GUVI”);
// getLengthOfWord(“”);
// getLengthOfWord();
// getLengthOfWord(9);
// Output:
// 4
// 0
// -1
// -1
function getLengthOfWord(word1) {
  if (word1 === undefined || typeof word1 === "number") return -1;
  return word1.length;
}
console.log(getLengthOfWord("Hello"));
// Problem:
// Write a function called “isSameLength”.
// Given two words, “isSameLength” returns whether the given words have the same length.
// Input:
// isSameLength(“GUVI”, “GEEK”);
// Output:
// true

function isSameLength(word1, word2) {
  return word1.length === word2.length;
}
console.log(isSameLength("GUVI", "GEEK"));
// Problem:
// Create a function to calculate the distance between two points defined by their x, y coordinates
// console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
console.log(getDistance(100, 100, 400, 300));
// Problem:
// Write a function called “getNthElement”.
// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
// Input:
// getNthElement([1, 3, 5], 1);
// Output:
// 3
function getNthElement(array, n) {
  return array[n];
}
console.log(getNthElement([1, 3, 5], 1));
// Problem:
// Write a function called “getLastElement”.
// Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
// Input:
// getLastElement([1, 2, 3, 4]);
// Output:
// 4

function getLastElement(array) {
  if (array.length === 0) return -1;
  return array[array.length - 1];
}
console.log(getLastElement([1, 2, 3, 4]));
// Problem:
// Write a function called “getProperty”.
// Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.

var obj = {
  mykey: "value",
};
// Input:
// getProperty(obj,’mykey’);
// getProperty(obj,’dummykey’);
// Output:
// value
// NA
// var obj = {
//  mykey: “value”
// };
function getProperty(obj, key) {
  return obj[key];
}
console.log(getProperty(obj, "mykey"));
console.log(getProperty(obj, "dummy"));
// Problem:
// Write a function called “addProperty”.
// Given an object and a key, “addProperty” adds a new property on the given object with a value of true.

obj = {};
// Input:
// addProperty(obj, “mykey”);
// Output:
// {
// mykey: true
// }
// var obj = {
//  mykey: “value”
// };
function addProperty(obj, key) {
  obj[key] = true;
}
addProperty(obj, "mykey");

console.log(obj);
// Problem:
// Write a function called “removeProperty”.
// Given an object and a key, “removeProperty” removes the given key from the given object.
// Input:
// removeProperty(obj, “name”);
// Output:
// undefined
obj = { name: "John" };
function removeProperty(obj, key) {
  delete obj[key];
}
removeProperty(obj, "name");
console.log(obj);
// Problem:
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
var arr1 = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = (function countPositivesSumNegatives(arr) {
  let sumofneg = 0,
    countofpos = 0;
  arr.forEach((element) => {
    if (element < 0) sumofneg += element;
    else {
      countofpos++;
    }
  });
  return [countofpos, sumofneg];
})(arr1);
console.log(ar2);
// Problem:
// Create a function that receives an array of numbers and returns an array containing only the positive numbers
function getPositives(ar) {
  return ar.filter((e) => e > 0);
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);
// Problem:
// Write a function `powersOfTwo` which will return list of all powers of 2 from 0 to n (where n is an exponent).
// n = 0 -> 2⁰ -> [1]
// n = 1 -> 2⁰, 2¹ -> [1,2]
// n = 2 -> 2⁰, 2¹, 2² -> [1,2,4]
// Input:
// powersOfTwo(0)
// powersOfTwo(1)
// powersOfTwo(2)
// Output:
// 1
// 1,2
// 1,2,4
function powersOfTwo(n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    res.push(2 ** i);
  }
  return res.join();
}
console.log(powersOfTwo(2));
// Problem:
// Find the maximum number in an array of numbers
function findMax(ar) {
  let max = 0;
  ar.forEach((element) => {
    if (max < element) max = element;
  });
  return max;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max:", max);
// Problem:
// Print the first 100 prime numbers
printPrimes(100);
// // Function prints the first nPrimes numbers
function printPrimes(nPrimes) {
  var n = 0;
  var i = 2;

  while (n < nPrimes) {
    if (isPrime(i)) {
      console.log(n, " → ", i);
      n++;
    }
    i++;
  }
}
// // Returns true if a number is prime
function isPrime(n) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x <= Math.sqrt(n); x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}
// Problem:
// Create a function that will return in an array the first “nPrimes” prime numbers greater than a particular number “startAt”
console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt) {
  var n = 0;
  var i = startAt;

  while (n < nPrimes) {
    if (isPrime(i)) {
      console.log(n, " → ", i);
      n++;
    }
    i++;
  }
}
// Returns true if a number is prime
// function isPrime(n) {
//   // your code here
// }

// Problem:
// Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s) {
  let reversed = [];
  for (let i = s.length - 1; i >= 0; i--) {
    reversed.push(s[i]);
  }
  return reversed.join("");
}
// Problem:
// Create a function that will merge two arrays and return the result as a new array
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2) {
  return ar1.concat(ar2);
}
// Problem:
// Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
function sumCSV(s) {
  let nums = s.split(", ").map(Number);
  return nums.reduce((a, b) => a + b, 0);

  // your code here
}

// 3 .Do the below programs in arrow functions:

// a.Print odd numbers in an array
       
       const arr=userInput[0];
       const odd=arr.filter(number =>
                {return number%2 !== 0}
                );
       console.log(odd);

//  b.Convert all the strings to title caps in a string array

           const array=userInput[0] ;
           const strings=array.map((array) => array[0].toUpperCase() 
                                +array.slice(1).toLowerCase())
            console.log(strings);

//  c. Sum of all numbers in an array
         
       const array=userInput[0] ;
      let sum = array.reduce(function (accumulator, current) {
          return accumulator + current;
        });
        console.log(sum);

// d. Return all the prime numbers in an array

    const newArray =userInput[0];
      const isPrime = num => { for (let i = 2; i < num; i++) 
    {
             if (num % i === 0) return false;
    } 
             return num !== 1
     };
    const myPrimeArray = newArray.filter(element => isPrime(element));
    console.log(myPrimeArray);                                        


// e.Return all the palindromes in an array 

const getAllPalindromes = function (words) {
return words.filter(function (word) {
return word.split("").reverse().join("") === word
});
};

console.log(getAllPalindromes(userInput[0]));