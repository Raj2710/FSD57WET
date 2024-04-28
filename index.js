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


// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise1 is resolved after 3 secs")
//     },3000)
// })

// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise2 is resolved after 2 secs")
//     },2000)
// })

// promise1
// .then((value)=>{
//     console.log(`resolved - ${value}`)
// })
// .catch((error)=>console.log(`rejected - ${error}`))


// promise2
// .then((value)=>console.log(`outer resolved - ${value}`))
// .catch((error)=>console.log(`rejected - ${error}`))

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise1 is rejected after 3 secs")
//     },3000)
// })

// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise2 is rejected after 2 secs")
//     },2000)
// })

// let promise3 = new Promise((resolve,reject)=>{
//     function myFunction(){
//         return "Promise3 is rejected"
//     }
//     reject(myFunction())
// })

// let promise4 = new Promise((resolve,reject)=>{
//     resolve("Promise4 is resolved")
// })

// let promise5 = new Promise((resolve,reject)=>{
//     reject("Promise5 is rejected")
// })

// Promise
// .all([promise1,promise2,promise3,promise4,promise5]) //similar to AND gate
// .then((value)=>console.log(`all resolved - ${value}`,value))
// .catch((error)=>console.log(`all rejected - ${error}`))

// Promise
// .any([promise1,promise2,promise3,promise4,promise5])//similar to OR gate
// .then((value)=>console.log(`any resolved - ${value}`,value))
// .catch((error)=>console.log(`any rejected - ${error}`))

// Promise
// .race([promise1,promise2,promise3,promise4,promise5])//whoever comes first will be the result
// .then((value)=>console.log(`race resolved - ${value}`))
// .catch((error)=>console.log(`race rejected - ${error}`))

//any will wait untill atleast one promise is resolved
//race don't care about resolve or reject the first to be settled is the output

// Promise
// .allSettled([promise1,promise2,promise3,promise4,promise5])//gives the status of all the promise
// .then((value)=>console.log(value))
// .catch((error)=>console.log(error))

//https://restcountries.com/v3.1/all


fetch("https://restcountries.com/v3.1/all")
.then((res)=>{
    if(res.status===200)
    {
        let h1 = document.createElement("h1")
        h1.innerText = res.status + " " + res.statusText

        document.body.appendChild(h1)

        return res.json()
    }
    else
    {
        console.log(res.status)
        console.log(res.statusText)

        let h1 = document.createElement("h1")
        h1.innerText = res.status + " " + res.statusText

        document.body.appendChild(h1)
    }
})
.then((data)=>{
    data.forEach((e)=>{
        console.log(e.name.common)
    })
})
.catch(error=>console.log(error))


fetch("https://catfact.ninja/fact")
.then((res)=>res.json())
.then((data)=>{
    console.log(data)
})
.catch(error=>console.log(error))