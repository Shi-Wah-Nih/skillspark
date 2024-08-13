
// Q.NO. 3
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


let number = 7;
console.log("The number is:", isEvenOrOdd(number)); 

number = 10;
console.log("The number is:", isEvenOrOdd(number)); 


// // Q.NO. 4
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }


// let originalString = "hello";
// let reversedString = reverseString(originalString);
// console.log("Reversed string is:", reversedString); 


// Q.NO. 2
console.log("Create a function that calculates the average of an array of numbers.");
const arry=[10,20,30,40,50];
function average(arr)
{
    let sum =0;
    for(let i=0; i<=arr.length-1; i++)
    {
        sum += arr[i];
    }
    return sum/arr.length;
}
const result =  average(arry);
console.log(result);

// using for loop reverse the number from 1 to 10


    for(let i=10; i>=1; i--)
    {
console.log(i);      
    }


// Create a function that reverses a string.
function reversedString(str)
{
    let reverse ='';
    for(let i = str.length-1; i>=0; i--)
    {
        reverse+=str[i];
    }
    return reverse;
}
console.log(reversedString('Hello'));

//  Write a function that finds the maximum value in an array of numbers.
const array=[10,20,30,40,5];
function max(arr){
    let max=0;
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
const result1=max(array);
console.log(result1);


// // Write a function that generates a random number between a given minimum and maximum.
// function randomInteger ( min , max ) {
//      let rand = min + Math . random ( ) * ( max - min ) ; 
//      return Math 
// }
// console.log()

function isPalindrome(str)
{
    let reversed = '';
    for(let i=str.length-1; i>=0; i--)
    {
        reversed+=str[i];
    }
    return reversed===str;
}
const result2=isPalindrome('madam');
console.log(result2);