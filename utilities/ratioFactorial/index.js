let factorial = require('../factorial/index')
let ratio = require('../ratio/index')
let rati
let fac
function ratioAndFactorial(num, num1, num2) {
  rati = ratio(num, num1)
  fac = factorial(num2)
  return {rati, fac}
}
ratioAndFactorial(2, 4, 8)
module.exports = ratioAndFactorial
