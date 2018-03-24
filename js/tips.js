var displayedTips = ''
var futureResult = {}

function showTips() {
	// compile information
	futureResult = {
		work: parseInt(futureWorkCircle.radius / 200 * 100),
		life: parseInt(futureLeisureCircle.radius / 200 * 100),
		blend: futureBlendAmount
	}

	console.log(result)
	console.log(futureResult)

	// evaluate result
	if (futureResult.work > result.work) {
		displayedTips = tips.moreWork
	} else if (futureResult.life > result.life) {
		displayedTips = tips.lessWork
	} else {
		displayedTips = tips.same
	}

	// display result
	$('#tips > p').html(displayedTips)
}