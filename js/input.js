function defineInput() {
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

	$('#next').on('click', function() {

		// go to next step
		if (curStep == 1) {
			curStep++
			$('#step').html(steps[curStep - 1])
			$(this).html('Done')
			saveResult('current')

			// reset values
			workCircle.radius = 50
			leisureCircle.radius = 50
			motivationCircle.radius = 50
			$('#work').val(workCircle.radius)
			$('#leisure').val(leisureCircle.radius)
			$('#motivation').val(motivationCircle.radius)
			update()
		} else if (curStep == 2) {
			saveResult('future')
			curStep++
			$('#step').html(steps[curStep - 1])
			showResult()
		}

		
	})
}