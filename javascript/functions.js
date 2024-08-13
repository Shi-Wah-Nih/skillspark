// function syntax

function fun()
{
    console.log("Hi everyone this is skill spark");
}

fun();


// addition function

function add()
{
    let x= 5;
    let y= 6;
    // let z = x + y;
    console.log("The sum is", x + y);
}

add();

// parameterized functions
console.log("addition function");
function addition(a,b)
{
    console.log(a+b);
}
addition(5,9);

console.log("subtract function");
function sub(a,b)
{
    console.log(a-b);
}
sub(15,9);

console.log("multiply function");
function mul(a,b)
{
    console.log(a*b);
}
mul(5,5);

console.log("division function");
function div(a,b)
{
    console.log(a/ b);
}
div(18,9);

console.log("altering the position of  a and b")
function sum({a, b})
{
    console.log(a);
    console.log(b);

    console.log(a + b);
}
sum({b:20, a: 10});

console.log("return statement");
function adds(a,b)
{
    return a+b;
}
console.log(adds(40,50));

// anynomous functions
let hello = function()
{
    console.log("hello");
}
hello();

// arrow functions

let greet = () =>
{
    return("Hello World");
}