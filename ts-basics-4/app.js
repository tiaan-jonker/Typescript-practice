// TS is inferring that type number will be returned 
// : number at end not required
function add(n1, n2) {
    return n1 + n2;
}
// TS doing its job, the return is void
function printResult(num) {
    console.log("Result: ".concat(num));
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// while the above would return undefined with: 
// console.log(printResult(add(5, 6)))
// the type is not undefined
// but if we explicitly say undefined then TS expects 
// an undefined return value because its a real value
function printResult2(num) {
    console.log("Result: ".concat(num));
    return;
}
// this will return undefined which is a real value
// console.log(printResult(add(5, 6)))
printResult(add(5, 30));
addAndHandle(5, 6, function (result) {
    console.log(result);
});
// this is fine but any function can be assigned to the variable
// let combinedValues: Function
var combinedValues;
combinedValues = add;
// mismatch, cannot do the below
// combinedValues = printResult
// TS is not happy, string assigned to function
// combinedValues = 5
console.log(combinedValues(3, 6));
