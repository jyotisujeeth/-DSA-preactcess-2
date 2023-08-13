js DSA

10 most asked DSA questions on Strings :

Q1. Write a function to find the maximum element in an array. Sol. function findMax(arr) { let max = arr[0]; for (let i = 1; i < arr.length; i++) { if (arr[i] > max) { max = arr[i]; } } return max; }

let arr=[5,3,5,67,5] let res=findMax(arr) console.log(res) //output: 67

======================================================

Write a function to concatenate two given arrays. Sol.) function concatArrays(arr1, arr2) { const newAr = [...arr1,...arr2] return newAr; }
const arr1 = [1, 2, 3]; const arr2 = [4, 5, 6]; const res = concatArrays(arr1, arr2); console.log(res); //[ 1, 2, 3, 4, 5, 6 ]

======================================================

3.Write a function to reverse an array. Sol.) function reverseArray(arr) { let reversed = []; for (let i = arr.length - 1; i >= 0; i--) { reversed.push(arr[i]); } return reversed; }

let arr=[5,3,9,67,2] let res=reverseArray(arr) console.log(res) //output: [ 2, 67, 9, 3, 5 ]

======================================================

Write a function to remove duplicates from an array. Sol.) function removeDuplicates(arr) { let unique = []; for (let i = 0; i < arr.length; i++) { if (!unique.includes(arr[i])) { unique.push(arr[i]); } } return unique; }
let arr=[5,3,9,67,5,5,2,67,2] let res=removeDuplicates(arr) console.log(res) //output: [ 5, 3, 9, 67, 2 ]

======================================================

Given an array of integers, find the maximum sum of any contiguous subarray of the array. Sol.) function maxSubarraySum(arr) { let maxSum = 0; let newMax = 0; for (let i = 0; i < arr.length; i++) { newMax += arr[i]; if ( newMax < 0) { newMax = 0; } if ( newMax > maxSum) { maxSum = newMax; } } return maxSum; }
const arr = [1, -3, 2, 1, -1]; console.log(maxSubarraySum(arr)); //output: 3

======================================================

Write a function to find the average of all elements in an array. Sol.) function averageArray(arr) { let sum = 0; for(let i=0;i<arr.length;i++){ sum +=arr[i]; } return sum / arr.length; }
let arr=[5,3,9,67,5,5,2,2] let res=averageArray(arr) console.log(res) //output: 12.25

======================================================

Write a function to rotate an array to the right by k positions. Sol.) function rotateArrayRight(arr, k) { let n = arr.length; let rotated = []; for (let i = 0; i < n; i++) { rotated[(i + k) % n] = arr[i]; } return rotated; }
const arr = [1, 2, 3, 4, 5]; const k = 2; const rotatedArr = rotateArrayRight(arr, k); console.log(rotatedArr); // Output: [4, 5, 1, 2, 3]

======================================================

Write a function to rotate an array to the left by k positions. Sol.) function rotateArrayLeft(arr, k) { let n = arr.length; let rotated = []; for (let i = 0; i < n; i++) { rotated[(i+n-k) % n] = arr[i]; } return rotated; }
const arr = [1, 2, 3, 4, 5]; const k = 2; const rotatedArr = rotateArrayLeft(arr, k); console.log(rotatedArr); // Output: [3,4, 5, 1, 2]

======================================================

Write a function to find the second largest element in an array. Sol.) function findSecondLargest(arr) { let largest = arr[0]; let secondLargest = null; for (let i = 1; i < arr.length; i++) { if (arr[i] > largest) { secondLargest = largest; largest = arr[i]; } else if (arr[i] > secondLargest) { secondLargest = arr[i]; } } return secondLargest; }
const arr = [1, 2,3,5,2,312,54, 0, -4, 5]; const res = findSecondLargest(arr); console.log(res); // Output: 54

======================================================

Write a function to find the kth smallest element in an array. Sol.) function findKthSmallest(arr, k) { let sorted = arr.sort(); return sorted[k - 1]; }
const arr = [1, 2, 3, 4, 5]; const k = 2; const res = findKthSmallest(arr, k); console.log(res); // Output: 2

========================================================================

10 most asked DSA questions on Strings
Write a function to print mirror image of string. Sol.) function reverseString(str) { let reversed = ''; for (let i = str.length - 1; i >= 0; i--) { reversed += str[i]; } return reversed; } let str="Atul Patel" let res= reverseString(str) console.log(res) // Output: letaP lutA
============================================

Write a function to reverse string by words . => (Atul Patel=>lutA letaP) Sol.) function reverseString(str1) { let str= str1.split(' ')
for (let i=0;i<str.length; i++) { str[i] = str[i].split('').reverse().join(''); } str=str.join(' ') return str; } let str="Atul Patel" let res= reverseString(str) console.log(res) // Output: lutA letaP
============================================

Write a function to check if a string is a palindrome. Sol.) function validatePalin(str) { const len = str.trim().length; for (let i=0; i<len/2; i++) {
if (str[i] !== str[len-1-i])
return 'not palindrome';
}
return 'palindrome';
}
const str='RAAjR' const res = validatePalin(str);
console.log(res); //output: not palindrome

============================================

Write a function to count the number of words in a sentence. Sol.) function wordCount(str) { let words = str.split(' '); return words.length; }
const str='RAJA MAULI MOOVIE RRR' const res = wordCount(str);
console.log(res); //output: 4

============================================

Write a function to find the first non-repeating character in a string. Sol.) function firstNonRepeating(str) { let chars = {}; for (let i = 0; i < str.length; i++) { const currChar = str[i]; if (chars[currChar]) chars[currChar]++; else chars[currChar] = 1;
} for (let char in chars) { if (chars[char] === 1) return char; } return null; }
const str = "aabbcdeeff"; const res = firstNonRepeating(str); console.log(res); // Output: "c"

============================================

Write a function to find the most common character in a string. Sol.) function mostCommon(str) { let chars = {}; for (let i = 0; i < str.length; i++) { const currChar = str[i]; if (chars[currChar]) chars[currChar]++; else chars[currChar] = 1;
} let max=0; let maxChar='' for (let char in chars) { if (chars[char]>max) { max=chars[char] maxChar=char } } return maxChar;
}
const str = "abbcdddeeeffe"; const res = mostCommon(str); console.log(res); // Output: "e"

============================================

Write a function to check if two strings are anagrams. Sol.) function isAnagram(str1, str2) { if(str1.length!==str2.length) return false; let sorted1 = str1.split('').sort().join(''); let sorted2 = str2.split('').sort().join(''); return sorted1 === sorted2; }
const str1 = 'silent'; const str2 = 'listen'; const result = isAnagram(str1, str2); console.log(result); // Output: true

============================================

Write a function to find the index of a substring in string. Sol.) const str = "Hello, world!"; const index = str.indexOf('wl'); console.log(index); // Output: -1
============================================

Write a function to remove first occurance of substring from string. Sol.) function removeSubstr(str,rem){ let index = str.indexOf(rem); if(index=== -1){ return 'subString Not Exists' } else{ let len=rem.length; str= str.slice(0,index)+str.slice(index+len) return str } }
let str = "Hello, world!"; let rem='wor' let res= removeSubstr(str,rem) console.log(res); // Output: Hello, ld!

============================================

Write a function to inserts a new word or character at a specific position in a given string. Sol.) function insertWordAtPosition(str, k, newWord) { if (k > str.length) { return str + newWord; } else if (k < 0) { return newWord + str; } else { return str.slice(0, k) + newWord + str.slice(k); } }
const originalString = "Hello World!"; const index=6 const insertStr="New " const res = insertWordAtPosition(originalString, index, insertStr); console.log(res); // Output: "Hello New World!"

========================================================================

7 most asked DSA questions on Objects
Write a function to find the key with the highest value in an object. Sol.) function highestValue(obj) { let maxVal=-Infinity let maxKey=null for(let key in obj){ if(obj[key]>maxVal){ maxVal=obj[key] maxKey=key } } return maxKey }
let obj={ a: 10, b: 20, c: 5, d: 3 }; let res= highestValue(obj) console.log(res); // Output: b

============================================

Write a function to find the key with the least value in an object. Sol.) function leastValue(obj) { let minVal= Infinity let minKey=null for(let key in obj){ if(obj[key]<minVal){ minVal=obj[key] minKey=key } } return minKey }
let obj={ a: 10, b: 20, c: 5, d: 3}; let res= leastValue(obj) console.log(res); // Output: d

============================================

Write a function to merge two objects. Sol.) function mergeObjects(obj1, obj2) { let merged = {}; for (let key in obj1) { merged[key] = obj1[key]; } for (let key in obj2) { merged[key] = obj2[key]; } return merged; }
const obj1 = { apple: 3, banana: 1}; const obj2 = { mango: 6,cherry: 2 }; let res = mergeObjects(obj1,obj2); console.log(res); //output: { apple: 3, banana: 1, mango: 6, cherry: 2 }

============================================

Write a function to check if an object is empty. Sol.) function isEmpty(obj) { let len=Object.keys(obj).length; if(len!==0) return 'NotEmpty'; return 'Empty'; }
const obj = { mango: 6,cherry: 2 }; let res = isEmpty(obj); console.log(res); //output: false

============================================

Write a function to count the number of properties in an object. Sol.) function propertyCount(obj) { let count=Object.keys(obj).length; return count; }
const person = { name: "Alice", age: 30, city: "New York", gender: "female" }; const count = propertyCount(person); console.log(count); // Output: 4

============================================

Write a function to convert an object to an array of key-value pairs. Sol.) function toArray(obj) { let arr = []; for (let key in obj) { arr.push([key, obj[key]]); } return arr; }
const obj = { a: 1, b: 2, c: 3 }; const arr = toArray(obj); console.log(arr); // Output: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

============================================

Write a function to sort an object by value. Sol.) function sortObject(obj) { let sorted = {}; let keys = Object.keys(obj); keys.sort((a, b)=> { return obj[a] - obj[b]; }); for (let key of keys) { sorted[key] = obj[key]; } return sorted; }
const obj = { apple: 3, banana: 1, cherry: 2 }; console.log(sortObject(obj)); // Output: { banana: 1, cherry: 2, apple: 3 }

========================================================================

3 most asked DSA questions on Recursion:
Write a function to find the factorial of a number using recursion. Sol.) function factorial(n) { if (n === 0) { return 1; } return n * factorial(n - 1); }
let res= factorial(5); console.log(res); //output: 120

============================================

Write a function to find the nth Fibonacci number using recursion. Sol.) function fibonacci(n) { if (n === 0 || n===1) { return n; } return fibonacci(n - 1) + fibonacci(n - 2); }
let res= fibonacci(7); console.log(res); //output: 13

============================================

Write a function to flatten a nested array using recursion. Sol.) function flatten(arr) { //const result = arr.flat(); //OR let result = []; for (let i = 0; i < arr.length; i++) { if (Array.isArray(arr[i])) { result.push(...flatten(arr[i])); } else { result.push(arr[i]); } } return result; }
const arr = [1, 2, [3, 4], 5, [6, 7, [8]]]; console.log(flatten(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

Program to find Total Prime numbers between 1 to n
class Solution { public: int countPrimes(int n) { if(n<=1) return 0; vector trueprimes(n,true); trueprimes[0]=false; trueprimes[1]=false; for(int i=2;ii<=n;i++){ if(trueprimes[i]==true){ //mark all primes multiple as false for(int j=ii;j<=n;j +=i) trueprimes[j]=false; }
}

    //count true's i.e primes
    int count=0;
    for(int i=2;i<=n;i++){
        if(trueprimes[i]==true)
             count++;
    }
    return count;
}
};