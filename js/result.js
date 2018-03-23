var resultCircleAmount = 3
var resultMargin = 150

var currentResult = {
	work: {},
	leisure: {},
	motivation: {}
}

var futureResult = {
	work: {},
	leisure: {},
	motivation: {}
}

function saveResult(type) {
	if (type == 'current') {
		for (var i = 0; i < currentCircles.length; i++) {
			if (i == 0) {
				currentResult.work = jQuery.extend(true, {}, currentCircles[i]);
			} else if (i == 1) {
				currentResult.leisure = jQuery.extend(true, {}, currentCircles[i]);
			} else {
				currentResult.motivation = jQuery.extend(true, {}, currentCircles[i]);
			}
		}
	} else if (type == 'future') {
		for (var i = 0; i < currentCircles.length; i++) {
			if (i == 0) {
				futureResult.work = currentCircles[i]
			} else if (i == 1) {
				futureResult.leisure = currentCircles[i]
			} else {
				futureResult.motivation = currentCircles[i]
			}
		}
	}
}

function drawResult() {
	clear()
	var curResult = [currentResult.work, currentResult.leisure, currentResult.motivation]
	var futResult = [futureResult.work, futureResult.leisure, futureResult.motivation]

	for (var i = 0; i < resultCircleAmount; i++) {
		var cir = {
			radius: curResult[i].radius,
			x: curResult[i].x - resultMargin,
			y: curResult[i].y,
			color: curResult[i].color
		}
		draw('current', cir)
	}

	for (var i = 0; i < resultCircleAmount; i++) {
		var cir = {
			radius: futResult[i].radius,
			x: futResult[i].x + resultMargin,
			y: futResult[i].y,
			color: futResult[i].color
		}
		draw('current', cir)
	}

}

function showResult() {
	drawResult()

	console.log('CURRENT:')
	console.log(currentResult)

	console.log('FUTURE:')
	console.log(futureResult)
}