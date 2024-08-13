// Write a function in JavaScript that takes two numbers and returns their sum.

function addNumbers(a, b) {
    return a + b;
}


const sum = addNumbers(5, 3);
console.log(sum); 

function addnum(c,d){
    return c +d;

}
const sum2 = addNumbers(9,3);
console.log(sum2);

// Create a JavaScript function that checks if a string is a palindrome.
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

// Write a JavaScript function that finds the maximum number in an array.
function maxnumber(){
    let arr=[2,5,8,4,9,0];
let result =math.Max(...arr)
return result;
}
