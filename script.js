// String Challenge

// Have the function StringChallenge(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuations or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

// Examples:

// Input: "xooxxo"
// Output: true

// Input: "x"
// Output: false

// function StringChallenge(str) {
//     let countX = 0;
//     let countO = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'x') {
//             countX += 1;
//         } else {
//             str[i] === 'o';
//             countO += 1;
//         }
//     }
//     if (countX !== countO) {
//         return false;
//     } else {
//         return true;
//     }
// }

// // keep this function call here
// console.log(StringChallenge('xoxo')); //=> true

//---------------------------------------------------------------

// String Challenge

// Have the function StringChallenge(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.

// Examples:

// Input: "after badly"
// Output: false

// Input: "laura sobs"
// Output: true

// function StringChallenge(str) {
//     if (/a...b/.test(str) || /b...a/.test(str)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // keep this function call here
// console.log(StringChallenge('after badly')); //=> true
// console.log(StringChallenge('after it')); //=> false

//---------------------------------------------------------------

// Array Challenge

// Have the function ArrayChallenge(arr) take the array of numbers stored in arr and return the index at which the number stop increasing and begin decreasing or stop decreasing and begin increasing. For example: if arr is [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point in the array where the numbers were increasing and the next number begins a decreasing sequence. The array will contain at least three numbers and it may contain only a single sequence, increasing or decreasing. If there is only a single sequence in the array, then your program should return -1. Indexing should begin with 0.

// Examples:

// Input: [-4, -2, 9, 10]
// Output: -1

// Input: [5, 4, 3, 2, 10, 11]
// Output: 3

// function ArrayChallenge(arr) {
//     const maxIndex = arr.indexOf(Math.max(...arr));
//     const minIndex = arr.indexOf(Math.min(...arr));
//     const getResult = (index) => {
//         return index === 0 || index === arr.length - 1 ? -1 : index;
//     };
//     return Math.max(getResult(maxIndex), getResult(minIndex));
// }

// // keep this function call here
// console.log(ArrayChallenge([-4, -2, 9, 10])); //=> -1
// console.log(ArrayChallenge([5, 4, 3, 2, 10, 11])); //=> 3
// console.log(ArrayChallenge([1, 2, 4, 6, 4, 3, 1])); //=> 3

//---------------------------------------------------------------

// Array Challenge

// Have a function ArrayChallenge(arr)take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not empty, will not contain positive integers, and will not contain more then one mode.

// Examples:

// Input: [1, 2, 3]
// Output: 0

// Input: [4, 4, 4, 6, 2]
// Output: 1

// function ArrayChallenge(arr) {
//     const add = (a, b) => a + b;
//     const mean = arr.reduce(add) / arr.length;
//     const hits = {};
//     for (let x of arr) {
//         hits[x] = 1 + (hits[x] || 0);
//     }
//     let mode = '';
//     let count = 0;
//     for (let x of arr.reverse()) {
//         if (hits[x] >= count) {
//             mode = x;
//             count = hits[x];
//         }
//     }
//     return mean == mode ? 1 : 0;
// }

// // keep this function call here
// console.log(ArrayChallenge([1, 2, 3])); //=> 0
// console.log(ArrayChallenge([4, 4, 4, 6, 2])); //=> 1

//---------------------------------------------------------------

// Array Challenge

// Have the function ArrayChallenge(arr) take the array of numbers stored in arr which will contain 5 positive integer, the first two representing a rage of numbers (a to b), the next 2 also representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. he first range of numbers are 4,5,6,7,8,9,10 and the second range of numbers are 2,3,4,5,6. The last element in the array is 3, and there are 3 numbers that overlap between both ranges: 4, 5 and 6. If both ranges do not overlap by at least x numbers, then your program should return the string false.

// Examples:

// Input: [5, 11, 1, 5, 1]
// Output: true

// Input: [1, 8, 2, 4, 4]
// Output: false

// function ArrayChallenge(arr) {
//     let counter = 0;
//     for (let i = arr[0]; i < arr[1]; i++) {
//         if (i >= arr[2] && i <= arr[3]) {
//             counter += 1;
//         }
//     }
//     return counter >= arr[4] ? true : false;
// }

// // keep this function call here
// console.log(ArrayChallenge([5, 11, 1, 5, 1])); //=> true
// console.log(ArrayChallenge([1, 8, 2, 4, 4])); //=> false

//---------------------------------------------------------------

// Math Challenge

// Have the function MathChallenge(num) take the num parameter being passed which will always be a positive integer its multiplicative persistent which is the number of times you must multiply the digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 12 and finally 1 * 4 = 4 and you should stop at 4.

// Examples:

// Input: 4
// Output: 0

// Input: 25
// Output: 4

// function MathChallenge(num) {
//     function multiply(array) {
//         return array.reduce(function (a, b) {
//             return a * b;
//         });
//     }
//     let count = 0;

//     while (num.toString().length > 1) {
//         num = num.toString().split('');
//         num = multiply(num);
//         count++;
//     }
//     return count;
// }

// // keep this function call here
// console.log(MathChallenge(4)); //=> 0
// console.log(MathChallenge(25)); //=> 2

//---------------------------------------------------------------

// Array Challenge

// Have a function ArrayChallenge(arr) take the array of numbers stored in arr and from the position in the array where a 1 is, return the number of spaces either left or right you must move to reach an enemy which is represented by a 2. For example: if arr is [0, 0, 1, 0, 0, 2, 0, 2] then your program should return 3 because the closest enemy (2) is three spaces away from the 1. The array will contain any number of 0's and 2's, but only a single 1, it may not contain any 2's at all as well, where isn that case your program should return a 0.

// Examples:

// Input: [1, 0, 0, 0, 2, 2, 2]
// Output: 4

// Input: [2, 0, 0, 0, 2, 2, 1, 0]
// Output: 1

// helper function to search for enemy from left or from right
// function makeMoves(array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         count++;
//         if (array[i] == 2) {
//             break;
//         }
//         if (i == array.length - 1 && array[i] != 2) {
//             count = 0;
//         }
//     }
//     return count;
// }

// function ArrayChallenge(arr) {
//     let onePosition = arr.indexOf(1);
//     let leftArray = [];
//     let rightArray = [];

//     for (let i = onePosition - 1; i >= 0; i--) {
//         leftArray.push(arr[i]);
//     }

//     for (let i = onePosition + 1; i < arr.length; i++) {
//         rightArray.push(arr[i]);
//     }

//     let leftEnemy = makeMoves(leftArray);
//     let rightEnemy = makeMoves(rightArray);

//     return leftEnemy > rightArray ? leftEnemy : rightEnemy;
// }

// // keep this function call here
// console.log(ArrayChallenge([0, 0, 1, 0, 0, 2, 0, 2])); //=> 3
// console.log(ArrayChallenge([1, 0, 0, 0, 2, 2, 2])); //=> 4
// console.log(ArrayChallenge([2, 0, 0, 0, 2, 2, 1, 0])); //=> 1

//----------------------------------------------------------------------------------

// Searching Challenge

// Have the function SearchingChallenge(str) take the str parameter being passed and determine if the string  is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and underscore character.
// 4. It cannot end with an underscore character

// If the username is valid then your program should return the string true, otherwise return the string false.

// Examples:

// Input: "aa_"
// Output: false

// Input: "u__hello_world123"
// Output: true

// function SearchingChallenge(str) {
//     if (str.length <= 4 || str.length >= 25) {
//         return false;
//     }
//     if (!str[0].match(/[a-z]/i)) {
//         return false;
//     }
//     if (str.match('^[a-zA-Z0-9_]-$')) {
//         return false;
//     }
//     if (str.endsWith('_')) {
//         return false;
//     } else {
//         return true;
//     }
// }

// // keep this function call here
// console.log(SearchingChallenge('aa_')); //=> false
// console.log(SearchingChallenge('u__hello_world123')); //=> true
// console.log(SearchingChallenge('#*_25ad')); //=> false
// console.log(SearchingChallenge('1234567890qwertyuiopasdfgh')); //=> false

//------------------------------------------------------------------------------------

// Array Challenge

// Have the function ArrayChallenge(arr) take the array of number stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.

// Examples:

// Input: [5, 7, 16, 1, 2]
// Output: false

// Input: [3, 5, -1, 8, 12]
// Output: true

function ArrayChallenge() {}

// // keep this function call here
// console.log(ArrayChallenge([4, 6, 23, 10, 1, 3])); //=> true
// console.log(ArrayChallenge([5, 7, 16, 1, 2])); //=> false
// console.log(ArrayChallenge([3, 5, -1, 8, 12])); //=> true
