//Дан радиус окружности, найти ее длину и площадь круга, ограниченную этой окружностью.

const radius = 10

circleLength = (radius) => 2 * Math.PI * radius
circleArea = (radius) => Math.PI * Math.pow(radius, 2)

console.log(circleLength(radius))
console.log(circleArea(radius))
