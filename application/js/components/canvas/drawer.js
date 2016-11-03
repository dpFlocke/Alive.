'use strict';
const Storage = require('../../store/observables');

//TODO: This is just a test, make a viewmodel for the dependent
// so that this has just the values of the observable not the
//observable itself
exports.init = function(canvas, world, objects) {
	var context = canvas.getContext('2d');	
	canvas.width = world().width;
	canvas.height = world().height;

	Storage.dependent(objects, function() {		
		context.fillStyle = 'black';
		context.fillRect(0, 0, canvas.width, canvas.height);

		objects.forEach(function(object) {
			
			context.fillStyle = 'green';
			context.fillRect(object().x, object().y, 10,10);

			/*context.beginPath();
			context.arc(
				object().x, 
				object().y, 
				object().radius,
				0, 
				2 * Math.PI,
				false);
			context.fill();*/
		});
	}, 'thingi');
};