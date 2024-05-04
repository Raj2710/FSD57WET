//async/await
// 1. Need to give the function async
//2. await can be used only inside the async function


//Promise using then and catch
// function display(){
//   fetch('https://restcountries.com/v3.1/all')
//   .then(res=>res.json())
//   .then(data=>console.log(data))
//   .catch(error=>console.error(error))
// }

//async and await
async function display(){
    try{
        let res = await fetch('https://restcountries.com/v3.1/all')
        let data = await res.json()
        console.log(data)
    }
    catch(error)
    {
        console.error(error)
    }
  }

display()