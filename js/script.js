'use strict'

function calculate() {
	// the variables
	let base = parseFloat(document.getElementById('base').value);
	let height = parseFloat(document.getElementById('height1').value);
	let height2 = parseFloat(document.getElementById('height2').value);

	//the calculations
	let volume= (1/6)*base*height*height2

	//the output
	document.getElementById('volume').innerHTML = 'the volume of your right triangular pyramid is ' + volume.toFixed(2) + 'cm³'
}