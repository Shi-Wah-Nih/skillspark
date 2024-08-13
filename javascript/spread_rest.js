const arr=[1,2,3];
const newArr = [5,6,...arr];
console.log("New array(before spread operator:", newArr);

// concatenating arrays
// const array1 = [1,2,3];
// const array2 = [5,6,7] ;
// const combined

// 
const arr2= [1,2,3,4,5,6,7,8,9];
const [a,b,c,...rest]=arr2;
console.log(a);
console.log(b);
console.log(c);

// reduce function
function add(...numbers){
    return numbers.reduce((sum, num)=> sum + num,0)

}
console.log(add(1,2,3,4,5));