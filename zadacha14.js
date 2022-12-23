//Дана длина ребра куба. Найти площадь грани, площадь полной поверхности и объем этого куба

const edge = 10

const cubeFacetArea = (edge) => Math.pow(edge, 2)
const cubeFullArea = (edge) => cubeFacetArea(edge) * 6
const cubeVolume = (edge) => Math.pow(edge, 3)

console.log(cubeFacetArea(edge))
console.log(cubeFullArea(edge))
console.log(cubeVolume(edge))
