//Promise is an eventual completion or Failure of asynchronous operation


//Promise States:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// let myPromise = new Promise((resolve,reject)=>{
//     // resolve("This is success")
//     reject("Facing issues")
// })


// myPromise
// .then((value)=>console.log(`resolved - ${value}`))
// .catch((error)=>console.log(`rejected - ${error}`))
// .finally(()=>console.log("Finally will always execute at end"))


let promise1 = new Promise((resolve,reject)=>{
    console.log("Promise 1 in pending state")
    setTimeout(()=>{
        resolve(10)
    },5000)
})

let promise2 = new Promise((resolve,reject)=>{
    console.log("Promise 2 in pending state")
    setTimeout(()=>{
        resolve(20)
    },2000)
})

promise1
.then((value)=>{
    console.log(`resolved - ${value}`)

    promise2
    .then((value)=>console.log(`resolved - ${value}`))
    .catch((error)=>console.log(`rejected - ${error}`))
})
.catch((error)=>console.log(`rejected - ${error}`))


promise2
.then((value)=>console.log(`outer resolved - ${value}`))
.catch((error)=>console.log(`rejected - ${error}`))
