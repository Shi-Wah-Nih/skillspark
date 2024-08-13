// function greet(callback)=>{
    //     return callback;
    //   }
    //   let result=greet(anything());
    //   console.log(result);
    //    function anything(){
    //     return 'hello'
    //    }


const greet = (callback) =>{
    return callback
}
const callbackFunction=(name)=>{
    return `Hello ${name}, How are you?`  //`=> tilde key
}
console.log(greet(callbackFunction("Ram")))


// function add(a, b){
//     return a + b; 
// }
 
//    let result = add(2, 3);
//     console.log(result); 


//     function sub(p,q)
//     {
//         return p-q;
//     }
//     let result1 =  sub(8,5);
//     console.log(result1);
   
function add(a,b)
{
    return a + b;
}
function sub(a,b)
{
    return a - b;
}
const addSub=(a,b)=>{
    let sum = add(a,b);
    let subtract = sub(a,b);
    return `Addition is ${sum} and Subtraction is ${subtract}`;
}
let result1 = addSub(10,5);
console.log(result1);

function mul(c,d)
{
    return c * d;
}
function div(c,d)
{
    return c / d;
}
const muldiv=(c,d)=>{
    let multiply = mul(c,d);
    let divide = div(c,d);
    return `Multiply is ${multiply} and Division is ${divide}`;
}
let result2 = muldiv(10,5);
console.log(result2);


function processData(arr, callback) {
    for(i in arr){  //for(let i=0; i<arr.length; i++)
        callback(arr[i]);
    }
    }
    function callbackfunction(data)
    {
        console.log(data);
    }
    let arr = [1,2,3,4,5,6,7,8,9,10];
    processData(arr, callbackfunction);

  
  
    function performTask(number, callback) {
        setTimeout(() => {
            callback(number * 2);
        }, 1000); // setTimeout takes time and callback
    }
    
 
    for (let i = 1; i <= 5; i++) {
        performTask(i, function(result) {
            console.log('Result for', i, 'is', result);
        });
    }

    