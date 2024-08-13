let a = 10;
if(a>=5)
{
    console.log("a is greater than 5");
}
else
{
console.log("a is less than 5");
}

//write a progarm to check whether a number is even or odd

let num1 = 10;
if(num1%2 == 0)
{
    console.log("this is even")
}
else
{
    console.log("this is odd")
}
  

//WAP to check whether a number is positive or negative or zero

let number = 5;
if( number >0 )
{
    console.log("This is positive number");
}
else if(number < 0)
{
    console.log("this is negative number");
}
else
{
console.log("This number is zero");
}

// WAP to check whether a number is divisible by 5 or not

let p = 10;
if(p % 5 == 0)
{
    console.log("This number is divisible by 5");

}
else
{
    console.log("This number is not divisible by 5");
}

//WAP to check the grades of the student based  on the marks 
 
let marks = -1;
if ( marks >=40 && marks <60)
{
    console.log("You are pass");
}
else if( marks >= 60 && marks < 70)
{
    console.log("You got first Division");
}
else if(marks>=80 && marks<=.100) 
{
    console.log("You got Distinction");
}
else 
{
    console.log("You are Fail")
}


//WAP about switch

let day = 3;
switch(day)
{
    case 1:
        console.log("This is sunday");
        break;
        case 2:
            console.log("This is monday");
            break;
            case 3:
                console.log("This is tuesday");
            break;
            case 4:
                console.log("This is wednesday");
            break;
            case 5:
                console.log("This is thrusday");
            break;
            case 6:
                console.log("This is friday");
            break;
            case 7:
                console.log("This is saturday");
            break;
            default :
            console.log("You have entered invalid day");

}
