//Известна длина окружности. Найти площадь круга, ограниченного этой окружностью.

const lengthCircle = 10

const circleArea = (lengthCircle) => Math.pow(lengthCircle, 2) / (4 * Math.PI)

console.log(circleArea(lengthCircle))
