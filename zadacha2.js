// Даны три числа. Найти среднее арифметическое  этих чисел.
const numbers = [9, 3, 6]
const getAverage = (numbers) => {
	const sum = numbers.reduce((acc, number) => acc + number, 0)
	return sum / numbers.length
}

console.log(getAverage(numbers))

module.exports = getAverage
