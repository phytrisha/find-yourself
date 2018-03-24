var steps = ['amount', 'blend', 'done', 'futureAmount', 'futureBlend', 'futureTips']
var curStep = 1

var workCircle = {
	radius: 100,
	x: 300,
	y: 300,
	color: activeCircleColor
}

var leisureCircle = {
	radius: 100,
	x: 500,
	y: 300,
	color: activeCircleColor
}

var futureWorkCircle = {
	radius: 100,
	x: 300,
	y: 300,
	color: activeCircleColor
}

var futureLeisureCircle = {
	radius: 100,
	x: 500,
	y: 300,
	color: activeCircleColor
}

var currentCircles = [workCircle, leisureCircle]

var blendAmount = 0
var futureBlendAmount = 0

// global init
$(document).ready(function() {
	// activate all the input
	defineInput()
	
	// init update
	update()

	// update step display
	$('#step').html(steps[curStep - 1])
})

function update() {
	// clear canvas before redrawing
	clear()

	// loop through all circles and draw them
	for (var i = 0; i < currentCircles.length; i++) {
		draw('current', currentCircles[i])
	}
}

// draw circles in the canvas
function draw(target, circle) {
	var c = document.getElementById(target)
	var ctx = c.getContext('2d')
	ctx.beginPath()
	ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI)
	ctx.closePath()
	// ctx.fillStyle = circle.color
	// ctx.fill()
	ctx.strokeStyle = circle.color
	ctx.stroke()
}

// clear canvas for redrawing purposes
function clear() {	
	var c = document.getElementById('current')
	var ctx = c.getContext('2d')
	ctx.clearRect(0, 0, c.width, c.height)
}