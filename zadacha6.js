// На поле, площадь которого X га, работали хлопкоуборочные машины.
// За сутки они убрали 15% всего поля. Сколько гектаров хлопка осталось убрать?

const fieldArea = 100
const clearedPercent = 15

const getRemainingField = (fieldArea, clearedPercent) =>
	fieldArea - (fieldArea * clearedPercent) / 100

console.log(getRemainingField(fieldArea, clearedPercent))

module.exports = getRemainingField
