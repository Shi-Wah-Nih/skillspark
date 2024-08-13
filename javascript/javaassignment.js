const name='Shiwane Mahat'

//1.Palindrome Checker: Write a function isPalindrome(str) that checks if a given string is 
function isPalindrome(str) {
    let reversed='';
    for(let i=str.length-1;i>=0;i--)
    {
        reversed+=str[i];
    }
    return reversed===str;
}
const plain=isPalindrome("hello");
console.log(plain);

//2.Fibonacci Sequence: Create a function fibonacci(n) that returns an array containing the first n numbers in the Fibonacci sequence.

function fibonacci(n) {
    if (n === 0) return [];
    if (n === 1) return [0];
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        let nextNumber = fibSequence[i - 1] + fibSequence[i - 2];
        fibSequence.push(nextNumber);
    }
    
    return fibSequence;
}
console.log(fibonacci(10)); 
//3.	Array Chunking: Write a function chunkArray(arr, size) that splits an array into groups of the specified size and returns them as a two-dimensional array.
function chunkArray(arr, size) {
    let chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        let chunk = arr.slice(i, i + size);
        chunks.push(chunk);
    }
    return chunks;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); 

//4.Anagrams: Create a function areAnagrams(str1, str2) that checks if two strings are anagrams of each other.

function Anagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
}
console.log(Anagrams("listen", "silent")); 
console.log(Anagrams("hello", "world"));   

//5.Array Intersection: Write a function arrayIntersection(arr1, arr2) that returns a new array containing the elements that are present in both input arrays.
function arrayIntersection(arr1, arr2) {
    let set1 = new Set(arr1);
    let intersection = [];
    for (let element of arr2) {
        if (set1.has(element)) {
            intersection.push(element);
        }
    }
     return intersection;
}
console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(arrayIntersection(['apple', 'banana', 'cherry'], ['cherry', 'date', 'apple'])); 

//6.Flatten Deeply Nested Array: Write a function flattenArray(arr) that flattens a deeply nested array.

function flattenArray(arr) {
    let result = [];
    
    function flattenHelper(subArr) {
        for (let element of subArr) {
            if (Array.isArray(element)) {
                flattenHelper(element);
            } else {
                result.push(element);
            }
        }
    }
    flattenHelper(arr);
    return result;
}
console.log(flattenArray([1, [2, [3, [4, 5]], 6], 7])); 

//7.Count Vowels: Create a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.

function countVowels(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let count = 0;
    for (let char of str) {
        if (vowels.has(char)) {
            count++;
        }
    }
      return count;
}
console.log(countVowels("Subject"));
console.log(countVowels("Javascript")); 

//8.Prime Number Checker: Write a function isPrime(num) that checks if a given number is a prime number.

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true; 
     for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }
     return true; 
}
console.log(isPrime(2));  
console.log(isPrime(3));   
console.log(isPrime(4));   
console.log(isPrime(29));  
console.log(isPrime(30));  

//9.Factorial Calculation: Create a function factorial(n) that returns the factorial of a given number n.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
     let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(0)); 
console.log(factorial(1)); 
console.log(factorial(7)); 

//10.Reverse String: Write a function reverseString(str) that reverses a given string.

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); 
console.log(reverseString("OpenAI")); 
console.log(reverseString("JavaScript")); 

//11.Sum of Array Elements: Create a function sumArray(arr) that returns the sum of all elements in an array.
function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(sumArray([10, -10, 20, -20, 30])); 
console.log(sumArray([]));

//12.Remove Duplicates from Array: Write a function removeDuplicates(arr) that removes duplicate elements from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
const number= [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(number);
console.log(uniqueNumbers); 

//13.Find Maximum Number: Create a function findMax(arr) that returns the maximum number in an array.
function findMax(arr) {
    return Math.max(...arr);
}
const numbers = [3, 5, 7, 2, 8, 1];
const maxNumber = findMax(numbers);
console.log(maxNumber); 

//14.Merge Sorted Arrays: Write a function mergeArrays(arr1, arr2) that merges two sorted arrays into a single sorted array.

function mergeArrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
   return result;
}
const sortedArray1 = [1, 3, 5, 7];
const sortedArray2 = [2, 4, 6, 8];
const mergedArray = mergeArrays(sortedArray1, sortedArray2);
console.log(mergedArray); 

//15.Longest Word in a Sentence: Create a function longestWord(sentence) that finds the longest word in a given sentence.

function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
return longest;
}
const sentence = "Find the longest word in this sentence";
const longest = longestWord(sentence);
console.log(longest);

//16.Title Case a Sentence: Write a function titleCase(sentence) that converts a given sentence to title case.

function titleCase(sentence) {
   return sentence
        .toLowerCase() 
        .split(' ')     
        .map(word =>    
            word.charAt(0).toUpperCase() + word.slice(1) 
        )
        .join(' ');    
}
const sentence1 = "hello world, this is a test sentence";
const titleCased = titleCase(sentence1);
console.log(titleCased); 

//17.Generate Random Number: Create a function randomNumber(min, max) that generates a random number between min and max.
 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const random = randomNumber(1, 10);
console.log(random);

//18.Sum of Digits: Write a function sumDigits(num) that returns the sum of the digits of a given number.

function sumDigits(num) {
  const numStr = Math.abs(num).toString();
    return numStr.split('') .map(Number).reduce((sum, digit) => sum + digit, 0); 
}
const result = sumDigits(1234);
console.log(result); 

//19.Count Occurrences: Create a function countOccurrences(arr, value) that counts the number of occurrences of a given value in an array.

function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}
const number1= [1, 2, 3, 2, 4, 2, 5];
const count = countOccurrences(number1, 2);
console.log(count); 

//20.Binary to Decimal Conversion: Write a function binaryToDecimal(binary) that converts a binary number (as a string) to its decimal equivalent.

function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}
const binaryStr = "1011";
const decimal = binaryToDecimal(binaryStr);
console.log(decimal); 
