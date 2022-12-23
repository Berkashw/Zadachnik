//Даны катеты треугольника. Найти его гипотенузу и площадь.

const firstLeg = 2
const secondLeg = 3

const getHypotenuse = (firstLeg, secondLeg) =>
	Math.sqrt(Math.pow(firstLeg, 2) + Math.pow(secondLeg, 2))
const getArea = (firstLeg, secondLeg) => (firstLeg * secondLeg) / 2

console.log(getHypotenuse(firstLeg, secondLeg))
console.log(getArea(firstLeg, secondLeg))
