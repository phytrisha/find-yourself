var displayedResult = ''
var result = {}

function showResult() {
	// compile information
	result = {
		work: parseInt(workCircle.radius / 200 * 100),
		life: parseInt(leisureCircle.radius / 200 * 100),
		blend: blendAmount
	}

	// evaluate result
	if (result.work > result.life) {
		if (result.blend > 50) {
			displayedResult = results.moreWork.highBlend
		} else {
			displayedResult = results.moreWork.lowBlend
		}
	} else if (result.life > result.work) {
		if (result.blend > 50) {
			displayedResult = results.lessWork.highBlend
		} else {
			displayedResult = results.lessWork.lowBlend
		}
	} else {
		if (result.blend > 50) {
			displayedResult = results.same.highBlend
		} else {
			displayedResult = results.same.lowBlend
		}
	}

	$('#result').css('display', 'initial')
	$('#result > p').html(displayedResult)
}