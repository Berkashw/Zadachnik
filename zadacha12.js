//Дано натуральное число N  (N>99) . Определить число сотен в нем.

const number = 10320

const getHundredsQuantity = (number) => Math.trunc(number / 100)

console.log(getHundredsQuantity(number))

module.exports = { getHundredsQuantity }
