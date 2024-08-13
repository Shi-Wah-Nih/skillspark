// // Questions with if-else Statements
// // 1.	Complex Condition Evaluation:

// // Question: What will be the output when a is 6 and b is 14?
let a = 6, b = 14;
if (a + b > 20) {
    if (a > b) {
        console.log("Condition 1");
    } else {
        console.log("Condition 2");
    }
} else {
    if (a < b) {
        console.log("Condition 3");
    } else {
        console.log("Condition 4");
    }
}


// // 2.	Handling Different Data Types:

// // Question: What will be the output if value is 5 (a number)?

// let value = 5;
// if (value === "5") {
//     console.log("Strictly Equal");
// } else if (value == "5") {
//     console.log("Loosely Equal");
// } else {
//     console.log("Not Equal");
// }


// 3.	Logical Operators:

// Question: What will be the output when x is 0 and y is false?

let x = 0;
let y = false;
if (x || y) {
    console.log("Output 1");
} else if (!x && !y) {
    console.log("Output 2");
} else {
    console.log("Output 3");
}



// 4.	Multiple Nested Conditions:

// Question: What will be the output when p is 20, q is 30, and r is 25?


let p = 20, q = 30, r = 25;
if (p < q && q > r) {
    if (p + r > q) {
        console.log("Output A");
    } else {
        console.log("Output B");
    }
} else {
    if (p > r || q < r) {
        console.log("Output C");
    } else {
        console.log("Output D");
    }
}



// 5.	Chained Ternary Operators:

// Question: What will be printed if age is 17?

let age = 17;
let category = (age >= 18) ? "Adult" :
               (age >= 13) ? "Teenager" :
               (age >= 3) ? "Child" : "Toddler";
console.log(`Category: ${category}`);





// Questions with switch-case Statements


// 6.	Basic Switch-Case:

// Question: What will be the output when color is "Green"?

let color = "Green";
switch (color) {
    case "Red":
        console.log("Stop");
        break;
    case "Green":
        console.log("Go");
        break;
    case "Yellow":
        console.log("Slow Down");
        break;
    default:
        console.log("Unknown Signal");
}


// 7.	Switch-Case with Fall-Through:

// Question: What will be the output when level is 1?

let level = 1;
switch (level) {
    case 1:
        console.log("Beginner");
    case 2:
        console.log("Intermediate");
    case 3:
        console.log("Advanced");
        break;
    default:
        console.log("Invalid level");
}



// 9.	Switch-Case without Breaks:


// Question: What will be printed if rating is 'C'?

let rating = 'C';
switch (rating) {
    case 'A':
        console.log("Excellent");
    case 'B':
        console.log("Good");
    case 'C':
        console.log("Average");
    case 'D':
        console.log("Poor");
        break;
    default:
        console.log("Fail");
}




// 10.	Switch-Case with Expressions:

// Question: What will be the output when number is 8?

let number = 8;
switch (true) {
    case (number < 5):
        console.log("Small");
        break;
    case (number >= 5 && number <= 10):
        console.log("Medium");
        break;
    case (number > 10):
        console.log("Large");
        break;
    default:
        console.log("Invalid number");
}




