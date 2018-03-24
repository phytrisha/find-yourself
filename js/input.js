var curWorkLifeSliderVal = 0
var curWorkLifeBlendSliderVal = 0

function defineInput() {
	$('#workLifeAmount').on('input', function(val) {
		var originalVal = val.target.valueAsNumber
		var curValWork = 200 - originalVal
		var curValLeis = originalVal

		workCircle.radius = parseInt(curValWork)
		leisureCircle.radius = parseInt(curValLeis)

		update()
	})

	$('#workLifeBlend').on('input', function(val) {
		var originalVal = val.target.valueAsNumber
		workCircle.x = 300 + originalVal
		leisureCircle.x = 500 - originalVal

		update()
	})

	$('#next').on('click', function() {
		// go to next step
		if (curStep == 1) {
			curStep++

			// update UI
			$('#step').html(steps[curStep - 1])
			$(this).html('Done')
			$('#workLifeAmount').css('display', 'none')
			$('#workLifeBlend').css('display', 'initial')

			curWorkLifeSliderVal = $('#workLifeAmount').val()

			// define max for blending depending on amount
			if (workCircle.radius > leisureCircle.radius) {
				$('#workLifeBlend').attr('max', leisureCircle.radius)	
			} else {
				$('#workLifeBlend').attr('max', workCircle.radius)
			}
			
		} else if (curStep == 2) {
			curStep++

			// update UI
			$('#step').html(steps[curStep - 1])
			$(this).remove()
			$('#workLifeBlend').css('display', 'none')

			// save blend amount
			blendAmount = parseInt($('#workLifeBlend').val() / $('#workLifeBlend').attr('max') * 100)

			showResult()
		}
	})

	$('#plan').on('click', function() {
		curStep++

		// Update UI
		$('#result').css('display', 'none')
		$('#step').html(steps[curStep - 1])
		$(this).remove()

		// copy information from previous circles to new ones
		workCircle.color = inactiveCircleColor
		leisureCircle.color = inactiveCircleColor

		futureWorkCircle.radius = workCircle.radius
		futureWorkCircle.x = workCircle.x

		futureLeisureCircle.radius = leisureCircle.radius
		futureLeisureCircle.x = leisureCircle.x

		currentCircles.push(futureWorkCircle)
		currentCircles.push(futureLeisureCircle)

		update()

		$('#future').css('display', 'initial')

		// set slider val to amount
		$('#futureWorkLifeAmount').val(curWorkLifeSliderVal)

		$('#futureWorkLifeAmount').on('input', function(val) {
			var originalVal = val.target.valueAsNumber
			var curValWork = 200 - originalVal
			var curValLeis = originalVal

			futureWorkCircle.radius = parseInt(curValWork)
			futureLeisureCircle.radius = parseInt(curValLeis)

			update()
		})

		$('#futureWorkLifeBlend').on('input', function(val) {
			var originalVal = val.target.valueAsNumber
			futureWorkCircle.x = 300 + originalVal
			futureLeisureCircle.x = 500 - originalVal

			update()
		})

		$('#futNext').on('click', function() {
			// go to next step
			if (curStep == 4) {
				curStep++

				// update UI
				$('#step').html(steps[curStep - 1])
				$(this).html('Done')
				$('#futureWorkLifeAmount').css('display', 'none')
				$('#futureWorkLifeBlend').css('display', 'initial')

				// define max for blending depending on amount
				if (futureWorkCircle.radius > futureLeisureCircle.radius) {
					$('#futureWorkLifeBlend').attr('max', futureLeisureCircle.radius)	
				} else {
					$('#futureWorkLifeBlend').attr('max', futureWorkCircle.radius)
				}

				curWorkLifeBlendSliderVal = (blendAmount / 100) * $('#futureWorkLifeBlend').attr('max')
				$('#futureWorkLifeBlend').val(curWorkLifeBlendSliderVal)
				
			} else if (curStep == 5) {
				curStep++

				futureBlendAmount = parseInt($('#futureWorkLifeBlend').val() / $('#futureWorkLifeBlend').attr('max') * 100)

				// update UI
				$('#step').html(steps[curStep - 1])
				$(this).remove()
				$('#futureWorkLifeBlend').css('display', 'none')

				$('#tips').css('display', 'initial')
				showTips()
			}
		})
	})
}