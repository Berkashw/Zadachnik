//Найти расстояние AB между точками с координатами A(x1, y1) и B(x2, y2).

const firstPoint = { x: 5, y: 5 }
const secondPoint = { x: 10, y: 10 }

const getLength = (firstPoint, secondPoint) =>
	Math.sqrt(
		Math.pow(firstPoint.x - secondPoint.x, 2) +
			(Math.pow(firstPoint.y - secondPoint.y), 2)
	)

console.log(getLength(firstPoint, secondPoint))

module.exports = getLength
