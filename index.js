// ForEach Map, Reduce,  Filter
// let details = [{
//         name:"Jai Ganesh",
//         email:"jai@gmail.com",
//         salary:800
//     },
//     {
//         name:"Aravindhan",
//         email:"aravindhan@gmail.com",
//         salary:1200
//     },
//     {
//         name:"Abirami",
//         email:"abirami@gmail.com",
//         salary:1000
//     },
//     {
//         name:"Ajay Kumar",
//         email:"ajai@gmail.com",
//         salary:500
//     },
//     {
//         name:"Arjun",
//         email:"arjun@gmail.com",
//         salary:600
//     }]

// //find the total salary of all employees
// let sum = 0
// details.forEach((e)=>{
//      sum = sum + e.salary
// })
// console.log(sum)

// let mapData = details.map((e)=>{
//     let salary = e.salary*1.20
//     return salary
// })
// console.log(mapData)


//Find the square of all numbers in the array
//[49,81,16,9,36,64]
// let a = [7,9,4,3,6,8]
// console.log(a.map(e=>e*e))

// let students = [
//     {
//         name:"Arjun",
//         marks:[10,7,6]
//     },
//     {
//         name:"Arun",
//         marks:[9,3,5]
//     },
//     {
//         name:"Bala",
//         marks:[5,7,10]
//     },
//     {
//         name:"Naga",
//         marks:[3,4,2]
//     }]

// let output = students.map((e)=>{
//     let sum = 0
//     // for(let i = 0;i<e.marks.length;i++)
//     //     sum = sum + e.marks[i]
    
//     e.marks.forEach(value=>{
//         sum = sum + value
//     })

//     return {name:e.name,total:sum,average:(sum/e.marks.length).toFixed(2)}
// })
// console.log(output)



//Filter Function

// let details = [{
//         name:"Jai Ganesh",
//         email:"jai@gmail.com",
//         salary:800
//     },
//     {
//         name:"Aravindhan",
//         email:"aravindhan@gmail.com",
//         salary:1200
//     },
//     {
//         name:"Abirami",
//         email:"abirami@gmail.com",
//         salary:1000
//     },
//     {
//         name:"Ajay Kumar",
//         email:"ajai@gmail.com",
//         salary:500
//     },
//     {
//         name:"Arjun",
//         email:"arjun@gmail.com",
//         salary:600
//     }]
    
// let filteredData = details.map(e=>{
//     let monthlySalary = e.salary * 30
//     // if(monthlySalary>25000)
//     //     return e.name
//     // else 
//     //     return false
    
//     return monthlySalary>25000
// })

// console.log(filteredData)



// REDUCE
// let marks = [8,9,4,3,5,6,10,1,2]
// let sum = 0
// for(let i=0;i<marks.length;i++){
//     sum = sum + marks[i] 
// }
// console.log(sum)

//array.reduce((accumulator,currentValue)=>accumulator+currentValue,initialValue)
//sum of all elements in array
// let answer = marks.reduce((sum,currentValue)=>sum+currentValue,0)
// console.log(answer)

//product of all elements in an array
// let answer = marks.reduce((sum,currentValue)=>sum*currentValue,1)
// console.log(answer)


//sum of odd elements present in array
// let marks = [1,2,3,4,5]
// let answer = marks.reduce((sum,currentValue)=>{
    
//     console.log(sum,currentValue)
//      condition ? true : false // Ternary or conditional operator
//   let returns = currentValue%2===1 ? sum + currentValue : sum
   
//   console.log(returns)
   
//   return returns
   
// },0)
// console.log(answer)

// let answer = details.reduce((acc,cv)=>{
//     return acc+cv.salary
// },0)
// console.log(answer)


// let names = ["Naga","Arun","bala","Mohideen","khaleel"]
// console.log(names.sort().reverse())

//ASCII 
//A - 65
//a - 97

// let numbers = [5,7,1,3,11,111]
// console.log(numbers.sort((a,b)=>a-b))


// let students = [
//     {
//         name:"Arjun",
//         marks:[10,7,6]
//     },
//     {
//         name:"Arun",
//         marks:[9,3,5]
//     },
//     {
//         name:"Bala",
//         marks:[5,7,10]
//     },
//     {
//         name:"Naga",
//         marks:[3,4,2]
//     }]
    

// let answer = students.map((e)=>{
//     let total = e.marks.reduce((acc,cv)=>acc+cv,0)
    
//     return {
//         name:e.name,
//         total,
//         average:total/e.marks.length
//     }
// })

// console.log(answer)