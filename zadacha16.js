//Сторона квадрата равна а. Найти площадь заштрихованной части.

const squareSide = 10

const getPaintedArea = (squareSide) =>
	Math.pow(squareSide, 2) - Math.PI * Math.pow(squareSide / 2, 2)

console.log(getPaintedArea(squareSide))
