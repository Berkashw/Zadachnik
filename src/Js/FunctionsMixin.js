export default {
	methods: {
		getLength(firstPointX, firstPointY, secondPointX, secondPointY) {
			const firstPoint = { x: firstPointX, y: firstPointY }
			const secondPoint = { x: secondPointX, y: secondPointY }
			return Math.sqrt(
				Math.pow(firstPoint.x - secondPoint.x, 2) +
					Math.pow(firstPoint.y - secondPoint.y, 2)
			)
		},
		getTrianglePerimetr(firstSide, secondSide, thirdSide) {
			return firstSide + secondSide + thirdSide
		},

		getTriangleArea(firstSide, secondSide, thirdSide) {
			const p = (firstSide + secondSide + thirdSide) / 2
			return Math.sqrt(p * (p - firstSide) * (p - secondSide) * (p - thirdSide))
		},
	},
}
