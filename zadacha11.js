//Дана сторона равностороннего треугольника. Найти его  площадь и радиусы вписанной и описанной окружностей.

const triangleSide = 10

const getTriangleArea = (side) => (Math.sqrt(3) / 4) * Math.pow(side, 2)
const getInscribedCircleRadius = (side) => side / (2 * Math.sqrt(3))
const getCircumscribedCircleRadius = (side) => side / Math.sqrt(3)

console.log(getTriangleArea(triangleSide))
console.log(getInscribedCircleRadius(triangleSide))
console.log(getCircumscribedCircleRadius(triangleSide))
