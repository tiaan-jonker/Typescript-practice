function add(n1, n2, showResult, phrase) {
    if (showResult) {
        return "".concat(phrase, " ").concat(n1 + n2);
    }
    return 'no results today';
}
var number1 = 5;
var number2 = 10;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
