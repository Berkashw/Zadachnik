//Дано четырехзначное число. Определить его первую и последнюю цифры.

const longNumber = 12222023567

longNumberString = longNumber.toString()
console.log(longNumberString[0])
console.log(longNumberString.slice(longNumberString.length - 1))
