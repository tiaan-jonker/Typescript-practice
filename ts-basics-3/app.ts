// UNION TYPES to make funcs more flexible
// function combine(input1: number | string, input2: number | string) {
//   let result
//   if (typeof input1 === 'number' && typeof input2 === 'number') {
//     result = input1 + input2
//   } else {
//     result = input1.toString() + input2.toString()
//   }
//   return result
// }

// const combinedAges = combine(30, 26)
// console.log(combinedAges)

// const combineNames = combine('Tiaan', 'Nicole')
// console.log(combineNames)

// LITERAL TYPES 
// function combine(
//   input1: number | string, 
//   input2: number | string, 
//   resultConversion: 'as-number' | 'as-string'
// ) {
//   let result
//   if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
//     result = +input1 + +input2
//   } else {
//     result = input1.toString() + input2.toString()
//   }

  // if (resultConversion === 'as-number') {
  //   return +result
  // } else {
  //   return result.toString()
  // }
//   return result
// }

// const combinedAges = combine(30, 26, 'as-number')
// console.log(combinedAges)

// const combinesStringAges = combine('30', '26', 'as-number')
// console.log(combinesStringAges)

// const combineNames = combine('Tiaan', 'Nicole', 'as-string')
// console.log(combineNames)

// ALIAS / CUSTOM TYPES 
type Combinable = number | string
type ConversionDes = 'as-number' | 'as-string'

function combine(
  input1: Combinable, 
  input2: Combinable, 
  resultConversion: ConversionDes
) {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }

  // if (resultConversion === 'as-number') {
  //   return +result
  // } else {
  //   return result.toString()
  // }
  return result
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

const combinesStringAges = combine('30', '26', 'as-number')
console.log(combinesStringAges)

const combineNames = combine('Tiaan', 'Nicole', 'as-string')
console.log(combineNames)

// Other alias examples
type User = {name: string, age: number}
const u1: User = {name: 'Tiaan', age: 29}

function greet(user: User) {
  console.log(`Hi, I am ${user.name}`)
}