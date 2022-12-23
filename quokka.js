const person = {
	name: "test",
	age: "10",
	location: "",
}
console.log(person)
function add(x, y) {
	return x + y
}
add(6, 5)

const nums = [17, 30, 22, 9, 14]

const sum = nums.reduce((acc, cur) => acc + cur)
const over = nums.filter((num) => num > 10)
sum
over
