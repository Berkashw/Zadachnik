//Даны координаты трех вершин треугольника A(x1, y1), B(x2, y2), C(x3, y3). Найти его периметр и площадь.
const getLength = require("./zadacha18")

const firstAppex = { x: 5, y: 5 }
const secondAppex = { x: 7, y: 10 }
const thirdAppex = { x: 10, y: 5 }

const firstSide = getLength(firstAppex, secondAppex)
const secondSide = getLength(secondAppex, thirdAppex)
const thirdSide = getLength(firstAppex, thirdAppex)

const getTrianglePerimetr = (firstSide, secondSide, thirdSide) =>
	firstSide + secondSide + thirdSide
