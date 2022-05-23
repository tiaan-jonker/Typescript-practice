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
// LITERAL TYPES to make funcs more flexible
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === 'as-number') {
    //   return +result
    // } else {
    //   return result.toString()
    // }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinesStringAges = combine('30', '26', 'as-number');
console.log(combinesStringAges);
var combineNames = combine('Tiaan', 'Nicole', 'as-text');
console.log(combineNames);
