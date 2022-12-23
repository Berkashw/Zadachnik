const { squareArea, squarePerimetr } = require("./zadacha3")

test("Square Area of 10 to should be 100 ", () => {
	expect(squareArea(10)).toBe(100)
})

test("Squre perimetr of side 10 shold be 40", () => {
	expect(squarePerimetr(10)).toBe(40)
})
