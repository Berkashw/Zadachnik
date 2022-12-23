//Даны два радиуса R1 и R2 (R1 < R2). Найти площадь кольца, ограниченного данными радиусами.

const firstRadius = 10
const secondRadius = 5

const getRingArea = (firstRadius, secondRadius) =>
	Math.PI * Math.pow(firstRadius, 2) - Math.PI * (secondRadius, 2)

console.log(getRingArea(firstRadius, secondRadius))
