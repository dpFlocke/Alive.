'use strict';

const observables = require('../js/store/observables.js');

let test1 = observables.source(
{x:0, y:0}, 
'test1');

let test2 = observables.source(
{x:0, y:0}, 
'test2');

let test3 = observables.source(
{x:0, y:0}, 
'test3');

let dependent = observables.dependent([test1, test2, test3], function() {
	return {
		x: test1().x + test2().x + 10 ,
		y: test1().y + test2().y + 10,
		z: test3()
	}

}, 'dependent');

let changed = observables.transaction(function(set) {
	set(test1, {x:7, y:3});
	set(test3, {x:100, y:100});
});
let changed2 = observables.transaction(function(set) {
	set(test2, {x:1, y:1});
});