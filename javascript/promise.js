const votePromise = new Promise((resolve, reject)=> {

    let age =20;

    if(age>=18)
    {
        resolve("You are elligible to voting");
    }
    else{
        reject("You are not elligible for voting")
    }

});
votePromise.then(
    (data)=>{
        console.log(data);
    }
).catch((error)=>{
    console.log(error);
});


// Basic Promise Creation
const promise = new Promise((resolve, reject)=>{
setTimeout(()=>{
    resolve("Hello World");
},2000);
});
promise.then(
    (msg=>{
        console.log(msg);
    })
)

// Handling Promise Resolution

