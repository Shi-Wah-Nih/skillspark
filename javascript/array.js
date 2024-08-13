let fruits=['apple', 'banana']
fruits.push('orange','grapes')
console.log(fruits);



// pop
let fruit=['lemon', 'banana','litchi'];
let removedfruit=fruit.pop();
console.log(fruit);

// unshift
// let veg =['carrot', 'lady finger',];

let number=['A','B','C','D','E'];
let slicednumber=number.slice(1,5);
console.log(slicednumber);

// let animal=['lion','tiger','elephant','zebra','deer'];
// let slicedanimal=animal.slice(-1,-3);
// console.log(slicedanimal);


// splice() method
let fruit1=['apple','litchi', 'orange']
fruit1.splice(1,0,'kiwi','banana');
console.log(fruit1);

// indexing
let colors=['red','green', 'blue','orange']
let removedcolors=colors.splice(2,2);
console.log(removedcolors);

// split() method
let sentence = "Hello, its my Kingdom";
let word = sentence.split(' ');
console.log(word);


// manipulation of array
// 1. find= It is used call back function and show satisfied first value of an array.
const number2=[1,2,3,4,5,6,7,8,9,10]
const foundNumber = number2.find((num)=>num>3);
console.log(foundNumber);

// filter = It is used call back function and show all satisfied value of an array.
const number3=[1,2,3,4,5,6,7,8,9,10]
const foundNumber1 = number3.filter((num)=>num>3);
console.log(foundNumber1);


// map = It is used call back function and show all the numbers where we manipulate  them.
const number4=[1,2,3,4,5,6,7,8,9,10]
const mapData = number4.map((num)=>num /2);
console.log(mapData);