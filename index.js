// console.log("Welcome to Node")

//Packages
//1. Internal Packages
//2. External Packages
//3. Custom Built Packages

// const os = require('os')//commonJS Import

// import os from 'os' //ES6 Import

// console.log(os.cpus())
// console.log(os.hostname())
// console.log(os.uptime())
// console.log(os.homedir())
// console.log(os.totalmem())
// console.log(os.freemem())


// const fs = require('fs')
//async
// function getFileData(){
//     fs.readFile('sample.txt','utf-8',(err,data)=>{
//         if(err)
//         {
//             console.log(err)   
//         }
//         else
//         {
//             console.log(data)
//         }
//     })
// }

//sync
// function getFileData(){
//    try {
//         let data = fs.readFileSync('sample.txt','utf-8')
//         console.log(data)
//    } catch (error) {
//         console.log(error)
//    }
// }

// getFileData()


// fs.writeFile('sample.txt','This is the new content for the file','utf-8',(err)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log('Write File Success')
//     }
// })


// fs.appendFile('sample.txt','This is another new content for this file','utf-8',(err)=>{
//     if(err)
//     {
//         console.log(err)
//     }
//     else
//     {
//         console.log('Append File Success')
//     }
// })


//1. Write a file
//2. Read
//3. Append
//4. Read


//async
// fs.writeFile('sample.txt','I am the new content','utf-8',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else
//     {
//         console.log("Write File Successful")
//         fs.readFile('sample.txt','utf-8',(err,data)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 console.log(data)
//                 fs.appendFile('sample.txt','I am the another data','utf-8',(err)=>{
//                     if(err){
//                         console.log(err)
//                     }
//                     else{
//                         console.log("Append File Successful")
//                         fs.readFile('sample.txt','utf-8',(err,data)=>{
//                             if(err)
//                                 console.log(err)
//                             else
//                                 console.log(data)
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })


//sync
// try {
//     fs.writeFileSync('sample.txt','I am the new content','utf-8')
//     let data = fs.readFileSync('sample.txt','utf-8')
//     console.log(data)
//     fs.appendFileSync('sample.txt','I am another data','utf-8')
//     data = fs.readFileSync('sample.txt','utf-8')
//     console.log(data)
// } catch (error) {
//     console.log(error)
// }

// const server = new http.createServer((req,res)=>{
//     res.writeHead(200,"Success",{
//         "Content-Type":"application/json"
//     })
//     const url = req.url;
//     let response = null
//     if(url==='/home'){
//         response = {
//             status:200,
//             message:"Home Page Data Fetched Successfully"
//         }
//     }
//     else if(url === '/user'){
//         response = {
//             status:200,
//             message:"User Data Fetched Successfully",
//             data:[]
//         }
//     }
//     else if(url === '/about'){
//         response = {
//             status:200,
//             message:"This is all about Node JS"
//         }
//     }
//     else if(url==='/'){
//         res.writeHead(200,"Success",{
//             "Content-Type":"text/html"
//         })
        
//     }
//     if(url==='/')
//         res.end(`<h1>Node JS Server Running</h1>`)
//     else
//         res.end(JSON.stringify(response))
// })

const http = require('http')
const fs = require('fs')
const qs = require('querystring')

const server = new http.createServer((req,res)=>{
    res.writeHead(200,"OK",{
        "Content-Type":"application/json"
    })
   try {
    if(req.method==='GET'){
        let data = fs.readFileSync('sample.txt','utf-8')
        let response = {
            statusCode:200,
            message:"File Read Successfull",
            data
        }
        res.end(JSON.stringify(response))
    }
    else if(req.method==='POST'){
        let stream=''
        req.on('data',chunk=>{
            stream += chunk.toString()
        })

        req.on('end',()=>{
            let body = JSON.parse(stream)

            fs.writeFileSync('sample.txt',body.data,'utf-8')

            res.end(JSON.stringify({
                statusCode:200,
                message:"File Write Successfull",
            }))
        })

      
    }
    else if(req.method==='PUT'){
        let stream=''
        req.on('data',chunk=>{
            stream += chunk.toString()
        })

        req.on('end',()=>{
            let body = JSON.parse(stream)

            fs.appendFileSync('sample.txt',body.data,'utf-8')

            res.end(JSON.stringify({
                statusCode:200,
                message:"File Updated Successfully",
            }))
        })

      
    }
    else{
        res.end(JSON.stringify({
            statusCode:400,
            message:"URL Invalid"
        }))
    }
    
   } catch (error) {
    res.end(JSON.stringify(error))
   }
})

server.listen(8000,()=>{
    console.log("Server is listening port 8000")
})