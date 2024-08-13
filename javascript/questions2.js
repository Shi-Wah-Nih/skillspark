// Let’s practice if/else or switch/case

// 4. Question: How can you use an if/else statement to check if a given string is longer than 10 characters or not?


// Solution:

let inputString = "Hello, world!";

// Using if/else statement
if (inputString.length > 10) {
  console.log("The string is longer than 10 characters.");
} else {
  console.log("The string is 10 characters or shorter.");
}




// 6. Question: Implement a JavaScript function that takes a month number (1-12) as input and returns the number of days in that month using switch case.

// Solution:

function getDaysInMonth(monthNumber) {
  switch (monthNumber) {
    case 1:
      return 31;
    case 2:
      return 29;
      case 3:
        return 31;
        case 4:
      return 30;
      case 5:
      return 31;
      case 6:
      return 30;
      case 27:
      return 31;
      case 8:
      return 31;
      case 9:
      return 30;
      case 10:
      return 31;
      case 11:
      return 30;
      case 12:
      return 31;

      
    default:
      return 31;
  }
}

console.log(getDaysInMonth(7)); 



// 7. Question: How can you use an if/else statement to check if a given year is a leap year or not?

// Solution:


let year = 2024;

// Using if/else statement
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}




// 8. Question: Create a JavaScript program that determines if a given variable is an array or not, using if/else statement.

// Solution:


let data = [1, 2, 3];

// Using if/else statement
if (Array.isArray(data)) {
  console.log("The variable is an array.");
} else {
  console.log("The variable is not an array.");
}



// 9. Question: Write a JavaScript function to calculate the discount amount based on the purchase amount using switch case. If the purchase amount is less than 100, apply a 5% discount; otherwise, apply a 10% discount.

// Solution:


function calculateDiscount(purchaseAmount) {
  switch (true) {
    case (purchaseAmount < 100):
      return purchaseAmount * 0.05;
    default:
      return purchaseAmount * 0.1;
  }
}

console.log(calculateDiscount(120));



// 10. Question: Implement a JavaScript program to determine the type of a variable (string, number, boolean, object, undefined, null) using if/else statements.

// Solution:



function getType(variable) {
  if (typeof variable === 'string') {
    return "string";
  } else if (typeof variable === 'number') {
    return "number";
  } else if (typeof variable === 'boolean') {
    return "boolean";
  } else if (typeof variable === 'object') {
    if (variable === null) {
      return "null";
    } else {
      return "object";
    }
  } else if (typeof variable === 'undefined') {
    return "undefined";
  } else {
    return "unknown";
  }
}

console.log(getType("Hello"));
