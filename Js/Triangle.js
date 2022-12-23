const getLength = (firstPoint, secondPoint) =>
	Math.sqrt(
		Math.pow(firstPoint.x - secondPoint.x, 2) +
			(Math.pow(firstPoint.y - secondPoint.y), 2)
	)

const firstSide = getLength(firstAppex, secondAppex)
const secondSide = getLength(secondAppex, thirdAppex)
const thirdSide = getLength(firstAppex, thirdAppex)

const getTrianglePerimetr = (firstSide, secondSide, thirdSide) =>
	firstSide + secondSide + thirdSide

const canvas = document.getElementById("myCanvas"),
	context = canvas.getContext("2d")
context.beginPath()
context.moveTo(50, 50)
context.lineTo(70, 100)
context.lineTo(100, 100)
context.closePath()
context.strokeStyle = "red"
context.stroke()
