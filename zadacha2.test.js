const getAverage = require("../Zadachnik/zadacha2")

test("Average of 3 6 and 9 is 6 ", () => {
	expect(getAverage([3, 6, 9])).toBe(6)
})
