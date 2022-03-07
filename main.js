// console.log('Hello Node')

// function Sum(a,b){
//     return a+b
// }

// console.log(Sum(3,5))

// const Sum =(a,b)=> a+b 

// console.log(Sum(10,80))

// console.log(process.argv[3])
// console.log(process.argv)
// console.log(Sum(Number(process.argv[2]),Number(process.argv[3])))
// console.log(Sum(+process.argv[2],+process.argv[3]))

// const Multi = require('./ModuleLocal')
// const Sub = require('./ModuleLocal')

// console.log(Multi(+process.argv[2],+process.argv[3]))
// console.log(Sub(+process.argv[2],+process.argv[3]))

// const obj = require('./ModuleLocal')

// console.log(obj.Multi(+process.argv[2],+process.argv[3]))
// console.log(obj.Sub(+process.argv[2],+process.argv[3]))

const {Multi,Sub} = require('./ModuleLocal')

console.log(Multi(+process.argv[2],+process.argv[3]))
console.log(Sub(+process.argv[2],+process.argv[3]))
