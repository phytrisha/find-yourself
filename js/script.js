var steps = ['current', 'future', 'done']
var curStep = 1

var workCircle = {
	radius: 50,
	x: 375,
	y: 300,
	color: '#ff0000aa'
}

var leisureCircle = {
	radius: 50,
	x: 425,
	y: 300,
	color: '#00ff00aa'
}

var currentCircles = [workCircle, leisureCircle]

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

	clear()

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
	ctx.stroke()
}

function clear() {
	// clear canvas for redrawing purposes
	var c = document.getElementById('current')
	var ctx = c.getContext('2d')
	ctx.clearRect(0, 0, c.width, c.height)
}