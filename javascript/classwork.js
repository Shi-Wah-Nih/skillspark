// give and array of student object with name scrore properties, find the first student who scroed above 90 in javascript 
// using find function
let students = [
    { name: "sita", score: 85 },
    { name: "gita", score: 50 },
    { name: "ram", score: 88 },
    { name: "twinkle", score: 91 },
    { name: "deva", score: 95 }
];


let highScorer = students.find(student => student.score > 90);

if (highScorer) {
    console.log(`The first student who scored above 90 is ${highScorer.name} with a score of ${highScorer.score}.`);
} else {
    console.log("No student scored above 90.");
}


// give an array of numbers, write a function to square each number using map function

function squareNumbers(numbers) {
    return numbers.map(number => number * number);
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = squareNumbers(numbers);
console.log(squaredNumbers); 



// 5.	Given an array of objects representing books, each with title and author properties, write a function to create an array of strings in the format "Title by Author".
let books=[
    {Title:'science', Author:'Katak',},
    {Title:'Social', Author:'Bhuwan',},
    {Title:'Nepali', Author:"Dhan Maya",},
];
let bookTitle = books.map((book)=>`${book.Title} By ${book.Author}`);
console.log(bookTitle);

//  Given an array of student objects with name and scrore properties, filter out all students who failed (scored below 60)
const student = [
    { name: 'shila', score: 85 },
    { name: 'papita', score: 55 },
    { name: 'sohan', score: 50 },
    { name: 'rohan', score: 40 },
    { name: 'Evan', score: 90 }
  ];
  
  const passingStudents = student.filter(student => student.score <= 60);
  
  console.log(passingStudents);


  const string = ["hello", "world", "its"];
  const filterdArray = string.filter((str)=>{
    return !str.includes("e");
  });
  console.log(filterdArray);
  

// Given an array of numbers, write a function to find the first even number using find function.
let num = [1,5,4,6,9,7];
let findnum = num.find((number)=>number%2==0);
console.log(findnum);







