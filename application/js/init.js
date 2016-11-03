'use strict';
function sleep(x) {
   return function(cb) {
      setTimeout(cb, x)
   }
}

const Storage = require('../js/store/observables');
let object = Storage.source(
	{
		x: 200,
		y: 200,
		radius: 5
	}, 'Thingi');

let world = Storage.source(
{
	width : 500,
	height : 500
}, 'world');


const drawer = require('../js/components/canvas/drawer');
let canvas = document.getElementById('canvas');

drawer.init(canvas, world, [object]);

Storage.transaction(function(set) {
	set(object, {x:100, y:199});
});

setTimeout(malmal, 1000);
setTimeout(malmal, 2000);
setTimeout(malmal, 3000);
setTimeout(malmal, 4000);
setTimeout(malmal, 5000);
setTimeout(malmal, 6000);

function malmal() {
	let random1 = Math.ceil(Math.random() * 20 + 1);
	let random2 = Math.ceil(Math.random() * 20 + 1);
	let sign = Math.random() >= 0.5 ? 1:-1;
	Storage.transaction(function(set) {		
		set(object, {
			x: object().x + random1 * sign,
			y: object().y + random2 * sign
		});
	});
};


/*
TODO: remove this when you can remember it in your sleep :P
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
});*/