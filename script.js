// Ex Oh

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

// A B Check

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

// Changing Sequence

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

// Mean Mode

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

// Overlapping Ranges

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

// Multiplicative Persistence

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

// Closest Enemy

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

// Codeland Username Validation

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

// Array Addition I

// Have the function ArrayChallenge(arr) take the array of number stored in arr and return the string true if any combination of numbers in the array (excluding the largest number) can be added up to equal the largest number in the array. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.

// Examples:

// Input: [5, 7, 16, 1, 2]
// Output: false

// Input: [3, 5, -1, 8, 12]
// Output: true

// function ArrayChallenge(arr) {
//     // find largest number
//     let largestIndex = 0;
//     let largestNumber = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largestNumber) {
//             largestIndex = i;
//             largestNumber = arr[i];
//         }
//     }
//     arr.splice(largestIndex, 1);

//     let combos = [];
//     let size = arr.length;

//     for (let i = 0, max = Math.pow(2, size); i < max; i++) {
//         let num = i.toString(2);
//         while (num.length < size) {
//             num = '0' + num;
//         }
//         combos.push(num);
//     }

//     // iterate over all combos of numbers
//     for (let i = 0; i < combos.length; i++) {
//         let sum = 0;
//         for (let j = 0; j < combos[i].length; j++) {
//             if (combos[i][j] === '1') {
//                 sum += arr[j];
//             }
//         }

//         if (sum === largestNumber) {
//             return 'true';
//         }
//     }
//     return 'false';
// }

// // // keep this function call here
// console.log(ArrayChallenge([4, 6, 23, 10, 1, 3])); //=> true
// console.log(ArrayChallenge([5, 7, 16, 1, 2])); //=> false
// console.log(ArrayChallenge([3, 5, -1, 8, 12])); //=> true

//------------------------------------------------------------------------------------

// String Zigzag

// Have the function StringChallenge(strArr) read the array of string stored in strArr, which will contain the elements, the first some sort of string and the second element will be a number ranging from 1 to 6. The number represent how many rows to print the string on so that it forms a zig-zag pattern. For example: if strArr is ["coderbyte", "3"] the this word will look like the following if you print it in a zig-zag pattern with 3 rows:

// c      r     e
//   o  e  b  t
//    d     y

// Your program should return the word form by combining the characters as you iterate through each row, so for this example your program should return the string creoebtdy.

// Examples:

// Input: ['cat', '5']
// Output: cat

// Input: ['kaamvjjfl', '4']
// Output: kjajfavlm

// function StringChallenge(strArr) {
//     const string = strArr[0];
//     const range = Number(strArr[1]);

//     if (range === 1) {
//         return string;
//     }

//     const rows = Array.from({ length: range }, () => []);

//     let row = 0;
//     let direction = 1;

//     for (let i = 0; i < string.length; i++) {
//         const char = string[i];
//         rows[row].push(char);

//         const isToChangeDirection = row === range - 1; // -- reached last row

//         if (row === 0) direction = 1;
//         if (isToChangeDirection) direction = -1;

//         row += direction;
//     }

//     return rows.flat().join('');
// }

// console.log(StringChallenge(['cat', '5'])); //=> cat
// console.log(StringChallenge(['kaamvjjfl', '4'])); //=> kjajfavlm
// console.log(StringChallenge(['coderbyte', '3'])); //=> creoebtdy

//------------------------------------------------------------------------------------

// Food Distribution

// Have a function ArrayChallenge(arr) read the array of numbers stored in arr which will represent the hunger level of different people ranging from 0 to 5 (0 meaning not hungry at all, 5 meaning very hungry). You would also have N sandwiches to give out which will range from 1 to 20. The format of the array will be [N, h1, h2, h3,...] When N represents the number of sandwiches you have and the rest of the array will represent the hunger level of different people. Your goal is to minimize the hunger difference between each pair of people in the array using the sandwiches you have available.

// For example: if arr is [5, 3, 1, 2, 1], this mean you have five sandwiches to give out. You can distribute them in the following order to the people: 2, 0, 1, 0. Giving these sandwiches to the people their hunger levels now become: [1, 1, 1, 1]. The difference between each pair of people is now 0, the total is also 0, so your program should return 0. Note: you may have to give out all, or even any, of your sandwiches to produce a minimize difference.

// Another example: if arr is [4, 5, 2, 3, 1, 0] then you can distribute the sandwiches in the following order: [3, 0, 1, 0, 0] which makes all of the hunger levels the following: [2, 2, 2, 1, 0]. The difference between each pair of people is now: 0, 0, 1, 1 and so your program should return the final minimized difference of 2.

// Examples:

// Input: [5, 2, 3, 4, 5]
// Output: 1

// Input: [3, 2, 1, 0, 4, 1, 0]
// Output: 4

// function ArrayChallenge(arr) {
//     let N = arr.shift();
//     let hungers = arr;
//     let diffs = differences(hungers);
//     if (N >= diffs) {
//         return 0;
//     }
//     while (N > 0 && sum(diffs) > 0) {
//         let combos = [];
//         for (let i = 0; i < hungers.length; i++) {
//             let combo = hungers.slice();
//             combo[i]--;
//             combos.push(combo);
//         }

//         hungers = combos.reduce(minDiff);
//         N--;

//         diffs = differences(hungers);
//     }

//     return sum(diffs);
// }

// // HELPER METHODS
// // Returns an array of differences across each pair
// function differences(array) {
//     let diffs = [];

//     for (let i = 0; i < array.length - 1; i++) {
//         diffs.push(Math.abs(array[i] - array[i + 1]));
//     }
//     return diffs;
// }

// // Returns the sum of all values in an array (i.e. sum of all diffs)
// function sum(array) {
//     return array.reduce((p, c) => p + c, 0);
// }

// // Compares two array and returns the array with the smallest sum of differences
// function minDiff(arr1, arr2) {
//     if (sum(differences(arr1)) <= sum(differences(arr2))) {
//         return arr1;
//     } else {
//         return arr2;
//     }
// }

// console.log(ArrayChallenge([5, 2, 3, 4, 5])); //=> 1
// console.log(ArrayChallenge([3, 2, 1, 0, 4, 1, 0])); //=> 4

// Another Answer

// var totalDiff = function (arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length - 1; i++) {
//         sum += Math.abs(arr[i] - arr[i + 1]);
//     }
//     return sum;
// };

// var ArrayChallenge = function (arr) {
//     var food = arr.shift();
//     var diff = totalDiff(arr);
//     var potentialDiff = diff;

//     while (food > 0) {
//         var lowestI;
//         for (var i = 0; i < arr.length; i++) {
//             var newArr = arr.slice(0);
//             newArr[i]--;
//             if (totalDiff(newArr) <= potentialDiff) {
//                 lowestI = i;
//                 potentialDiff = totalDiff(newArr);
//             }
//         }
//         if (potentialDiff <= diff) {
//             arr[lowestI]--;
//             diff = potentialDiff;
//             food--;
//         } else {
//             return diff;
//         }
//     }

//     return diff;
// };

// console.log(ArrayChallenge([5, 2, 3, 4, 5])); //=> 1
// console.log(ArrayChallenge([3, 2, 1, 0, 4, 1, 0])); //=> 4

//------------------------------------------------------------------------------------

// Searching Challenge

// Have the function SearchingChallenge(strArr) take the array of strings stored in strArr, which will be 2D matrix of 0 and 1's, and determine how many holes, or contiguous regions of 0's, exist in the matrix. A contiguous region is one where there is a connected group of 0's going in one or more of four directions: up, down, left, or right. For example: if strArr is ["10111", "10101", "11101", "11111"], then this looks like the following matrix:

// 1 0 1 1 1
// 1 0 1 0 1
// 1 1 1 0 1
// 1 1 1 1 1

// For the input above, your program should return 2 because there are two separate contiguous regions of 0's. which create "holes" in the matrix. You can assume the input will not be empty.

// Examples:

// Input: ["01111", "01101", "00011", "11110"]
// Output: 3

// Input: ["1011", "0010"]
// Output: 2

// function SearchingChallenge(strArr) {
//     let ret = [];
//     let indexs = [];
//     let subStr = [];
//     for (const element of strArr) {
//         subStr = element.split('');
//         let index = [];
//         for (let y = 0; y < subStr.length; y++) {
//             if (subStr[y] == 0) {
//                 index.push(y);
//             }
//             if (y == subStr.length - 1) {
//                 indexs.push(index);
//             }
//         }
//     }
//     for (let i = 0; i < indexs.length; i++) {
//         for (let j = 0; j < indexs[i].length; j++) {
//             if (
//                 indexs[i + 1] &&
//                 (indexs[i][j] === indexs[i + 1][j] ||
//                     indexs[i + 1].indexOf(indexs[i][j]))
//             ) {
//                 if (ret.indexOf(strArr[i]) === -1) {
//                     ret.push(strArr[i]);
//                 }
//             }

//             if (Math.abs(indexs[i][j] - indexs[i][j + 1]) === 1) {
//                 if (ret.indexOf(strArr[i]) === -1) {
//                     ret.push(strArr[i]);
//                 }
//             }
//         }
//     }

//     return ret.length;
// }

// // keep this function call here
// console.log(SearchingChallenge(['1011', '0010'])); //=> 2
// console.log(SearchingChallenge(['01111', '01101', '00011', '11110'])); //=> 3

//-------------------------------------------------------------------------------
