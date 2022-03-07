// const fs = require('fs')

// console.log('Start')

// fs.readFile('./A.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// console.log(fs.readFileSync('./A.txt','utf8'))

// console.log('Finish')

// fs.readFile('./A.txt',(err,data)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log(data.toString())
//         }
// })


const http = require('http')

http.createServer((req,res)=>{
    res.write('<h1>Hello Sahla</h1>')
    res.end()
}).listen(5000,console.log('Server is running'))