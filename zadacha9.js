//Даны два положительных числа. Найти их среднее геометрическое.

const firstNumber = 12
const secondNumber = 3

const getGeometricMean = (firstNumber, secondNumber) =>
	Math.sqrt(firstNumber * secondNumber)

console.log(getGeometricMean(firstNumber, secondNumber))
