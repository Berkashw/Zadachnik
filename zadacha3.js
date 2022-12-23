//Дана сторона квадрата, найти его периметр и площадь
const squareSide = 10

function squarePerimetr(sideLength) {
	return sideLength * 4
}

function squareArea(sideLength) {
	return Math.pow(sideLength, 2)
}

console.log(squarePerimetr(squareSide))
console.log(squareArea(squareSide))

module.exports = { squarePerimetr, squareArea }
