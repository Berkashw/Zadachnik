const { getHundredsQuantity } = require("../Zadachnik/zadacha12")

test("Number of hundreds is 103 from 10320 ", () => {
	expect(getHundredsQuantity(10320)).toBe(103)
})
