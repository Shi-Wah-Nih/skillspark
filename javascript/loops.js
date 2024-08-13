// Question 1:

// Q1: Write a for loop that prints numbers from 1 to 5 in the console.


for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// Question 2:
// Q2: Using a while loop, print even numbers from 2 to 10 (inclusive) in the console.


let num = 2;
while (num <= 10) {
  console.log(num);
  num += 2;
}


// Question 3:

// Q: Write a for loop to calculate the sum of numbers from 1 to 10.


let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum:", sum);



// Question 4:

// Q: Using a while loop, find the factorial of a given number (e.g., 5).


let number = 5;
let factorial = 1;
while (number > 1) {
  factorial *= num;
  number--;
}
console.log("Factorial:", factorial);


// Question 5:

// Q: Write a for loop that prints the square of numbers from 1 to 5.


for (let i = 1; i <= 5; i++) {
  console.log(i * i);
}


// Question 6:

// Q: Using a while loop, print the cube of numbers from 1 to 5.


let p = 1;
while (p <= 5) {
  console.log(p * p * p);
  p++;
}


// Question 7:

// Q: Write a for loop to iterate through an array of names and print each name in the console.


const names = ["Alice", "Bob", "Charlie", "David"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}


// Question 8:

// Q: Using a while loop, find the sum of elements in an array of numbers.


const numbers = [10, 20, 30, 40, 50];
let sum1 = 0;
let index = 0;
while (index < numbers.length) {
  sum1 += numbers[index];
  index++;
}
console.log("Sum:", sum1);

// Question 9:

// Q: Write a for loop that prints the elements of an array in reverse order.**


const fruits = ["apple", "banana", "orange", "kiwi"];
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}


// Question 10:

// Q: Using a while loop, find the largest number in an array of numbers.


const number1 = [25, 10, 45, 30, 15];
let largest = number1[0];
let index1 = 1;
while (index1 < number1.length) {
  if (number1[index1] > largest) {
    largest = number1[index1];
  }
  index1++;
}
console.log("Largest Number:", largest);


// Question 11:

// Q: Write a for loop to print the multiplication table of a given number (e.g., 5) up to 10.


const n1 = 5;
for (let i = 1; i <= 10; i++) {
  console.log(n1 + " x " + i + " = " + n1 * i);
}


// Question 12:
// Q: Using a while loop, find the largest element in an array of numbers.

const numbers2 = [12, 43, 7, 25, 39];
let largest1 = numbers2[0];
let index2 = 1;
while (index2 < numbers2.length) {
  if (numbers2[index2] > largest1) {
    largest1 = numbers2[index2];
  }
  index2++;
}
console.log("Largest Number:", largest1);



// Question 13:
// Q: Write a for loop to print the following pattern:

// 1
// 22
// 333
// 4444
// 55555

for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += i;
  }
  console.log(row);
}


// Question 14:

// Q: Using a while loop, find the number of digits in a given number (e.g., 1234).


let Number = 1234;
let count = 0;
while (Number !== 0) {
  Number = Math.floor(Number / 10);
  count++;
}
console.log("Number of digits:", count);


// Question 15:

// Q: Write a for loop to calculate the sum of all odd numbers from 1 to 50.


let Sum = 0;
for (let i = 1; i <= 50; i += 2) {
  Sum += i;
}
console.log("Sum of odd numbers:", Sum);


// Question 16:

// Q: Using a while loop, print the numbers from 1 to 100, but skip the multiples of 5.


let num5 = 1;
while (num5 <= 100) {
  if (num5 % 5 !== 0) {
    console.log(num5);
  }
  num5++;
}

// Question 17:

// Q: Write a for loop to print the reverse of a given string (e.g., "hello").


const str = "hello";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}
console.log("Reversed string:", reversedStr);


// Question 18:

// Q: Using a while loop, find the factorial of a given number (e.g., 7).


let num9 = 7;
let factorial1 = 1;
while (num9 > 0) {
  factorial *= num;
  num9--;
}
console.log("Factorial:", factorial1);


// Question 19:
// Q: Write a for loop to print the following pattern:

// 1
// 12
// 123
// 1234
// 12345


for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}


// Question 20:

// Q: Using a while loop, find the sum of all elements in a multidimensional array of numbers.


const numbers7 = [[1, 2], [3, 4], [5, 6]];
let sum7 = 0;
let i = 0;
while (i < numbers7.length) {
  let j = 0;
  while (j < numbers7[i].length) {
    sum7 += numbers7[i][j];
    j++;
  }
  i++;
}
console.log("Sum:", sum7);


