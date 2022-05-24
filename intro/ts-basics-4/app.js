"use strict";
// TS is inferring that type number will be returned 
// : number at end not required
// function add(n1: number, n2: number): number {
// return  n1 + n2
// }
// TS doing its job, the return is void
// function printResult(num: number): void {
//   console.log(`Result: ${num}`)
// }
// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//   const result = n1 + n2
//   cb(result)
// }
// while the above would return undefined with: 
// console.log(printResult(add(5, 6)))
// the type is not undefined
// but if we explicitly say undefined then TS expects 
// an undefined return value because its a real value
// function printResult2(num: number): undefined {
//   console.log(`Result: ${num}`)
//   return
// }
// this will return undefined which is a real value
// console.log(printResult(add(5, 6)))
// printResult(add(5, 30))
// addAndHandle(5, 6, (result) => {
//   console.log(result)
// })
// this is fine but any function can be assigned to the variable
// let combinedValues: Function
// let combinedValues: (a: number, b: number) => number
// combinedValues = add
// mismatch, cannot do the below
// combinedValues = printResult
// TS is not happy, string assigned to function
// combinedValues = 5
// console.log(combinedValues(3, 6))
