//Найти остаток от деления  натурального числа a на натуральное число b.

const dividend = 103
const divider = 9

const getRemiender = (dividend, divider) =>
	dividend - Math.trunc(dividend / divider) * divider

console.log(getRemiender(dividend, divider))
