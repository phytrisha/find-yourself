var workCircle = {
	radius: 50,
	x: 350,
	y: 300,
	color: '#ff0000aa'
}

var leisureCircle = {
	radius: 50,
	x: 450,
	y: 300,
	color: '#00ff00aa'
}

var motivationCircle = {
	radius: 50,
	x: 400,
	y: 350,
	color: '#0000ffaa'
}

var currentCircles = [workCircle, leisureCircle, motivationCircle]

// global init
$(document).ready(function() {
	
	// init update
	update()


	$('#work').on('input', function(val) {
		var curVal = val.target.valueAsNumber
		workCircle.radius = parseInt(curVal)
		update()
	})

	$('#leisure').on('input', function(val) {
		var curVal = val.target.valueAsNumber
		leisureCircle.radius = parseInt(curVal)
		update()
	})

	$('#motivation').on('input', function(val) {
		var curVal = val.target.valueAsNumber
		motivationCircle.radius = parseInt(curVal)
		update()
	})
})

function update() {
	// clear canvas for redrawing purposes
	var c = document.getElementById('current')
	var ctx = c.getContext('2d')
	ctx.clearRect(0, 0, c.width, c.height)

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
	ctx.fillStyle = circle.color
	ctx.fill()
}