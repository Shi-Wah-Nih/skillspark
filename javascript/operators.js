const person={
    name: "Shiwane",
    roll_no: 12,
    isMarried: "false"
}
console.log(person)
console.log(person.roll_no)

//multiple value store in object datatypes
 const student1=[
    {
        Name: "Rabin",
        Age: 25 
    },
    {
        Name: "Elina",
        Age: 20
    }
 ];
 console.log(student1);
 console.log(student1[0].Name);

 //NaN datatype
 let x=5.0;
 let y= "12";
 let z=x + y;
 console.log(z);

 // return their datatype
 console.log( typeof x);

 //type casting in js
 let x_string = String(x);
 console.log(x_string);
 
// operators i. arithmetic operator ( + , - , *, /, % , **)
let n1 = 25;
let n2 = 26;
let n4 = 2;
let n3 = n1 * n2;
console.log (n3);

 
// ii. assignment operator 
let num1 = 10;
let num2 =20;
num1++;  // x+=1 ; x = x +1
num1++;
num1--;
console.log(x);

num2 = num2 +10;
console.log(num2);

// iii. comparison operator
let i = "10";
let k = 10;
console.log(i==k);
console.log(i===k);
console.log(i!=k);
console.log(i!==k);

// iv. logical operator
console.log("logical operator");
let p = true;
let q = false;
console.log(p && q);
console.log(p || q);
console.log(!p);
console.log(!q);
