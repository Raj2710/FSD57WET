// ******************************* EXAMPLE 1 **************************************
// function display(value){
//     console.log("The value printed in display function is "+value)
// }

// function add(a,b,callback)
// {
//     console.log("The input is "+a+","+b)
//     callback(a+b)
// }
// add(10,5,display)

// ******************************* EXAMPLE 2 **************************************
// let values = [1,2,3,4,5]
// function foreachOwn(values,callback){
//     for(let i = 0;i<values.length;i++)
//     {
//         callback(values[i])
//     }
// }

// foreachOwn(values,(e)=>{
//     console.log("callback "+e)
// })

//usual way of writing code
// values.forEach((e)=>{
//     console.log("ForEach "+e)
// })


// ******************************* Callback Hell **************************************
//asyc
// setTimeout(()=>{
//     console.log("Callback 1")
    
// },1000)

// setTimeout(()=>{
//     console.log("Callback 2")
   
// },1000)

// setTimeout(()=>{
//     console.log("Callback 3")
// },1000)


setTimeout(()=>{
    console.log("Callback 1")
    setTimeout(()=>{
        console.log("Callback 2")
        setTimeout(()=>{
            console.log("Callback 3")
            setTimeout(()=>{
                console.log("Callback 4")
                setTimeout(()=>{
                    console.log("Callback 5")
                    setTimeout(()=>{
                        console.log("Callback 6")
                        setTimeout(()=>{
                            console.log("Callback 7")
                            setTimeout(()=>{
                                console.log("Callback 8")
                                setTimeout(()=>{
                                    console.log("Callback 9")
                                    setTimeout(()=>{
                                        console.log("Callback 10")
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)


// setTimeout(()=>{
//     console.log("CallbackHell 1")
//     setTimeout(()=>{
//         console.log("CallbackHell 2")
//         setTimeout(()=>{
//             console.log("CallbackHell 3")
//             setTimeout(()=>{
//                 console.log("CallbackHell 4")
//                 setTimeout(()=>{
//                     console.log("CallbackHell 5")
//                     setTimeout(()=>{
//                         console.log("CallbackHell 6")
//                         setTimeout(()=>{
//                             console.log("CallbackHell 7")
//                             setTimeout(()=>{
//                                 console.log("CallbackHell 8")
//                                 setTimeout(()=>{
//                                     console.log("CallbackHell 9")
//                                     setTimeout(()=>{
//                                         console.log("CallbackHell 10")
//                                     },1000)
//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)