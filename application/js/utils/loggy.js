'use strict';


module.exports = function() {
	let logString = '';
	if(arguments.length === 0) {
		console.log(new Error().stack);
	}
	for(let i = 0; i < arguments.length; i++) {
		if(typeof(arguments[i] === 'object')) {
			logString += JSON.stringify(arguments[i],0,4);
		}		
	}
	console.log(logString);
};