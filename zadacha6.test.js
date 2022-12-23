const getRemainingField = require("../Zadachnik/zadacha6")

test("While 15% was cleared remaining field will be 85 from field of 100 ", () => {
	expect(getRemainingField(100, 15)).toBe(85)
})
