function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    return `${phrase} ${n1 + n2}`
  }

  return 'no results today'
}

const number1 = 5
const number2 = 10
const printResult = true
const resultPhrase = 'Result is:'

const result = add(number1, number2, printResult, resultPhrase)
console.log(result)