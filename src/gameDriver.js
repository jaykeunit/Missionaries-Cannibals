'use strict'
var game = require('../src/game');
var readlineSync = require('readline-sync');

var driveGame = function() {
	
	var input =  Number(readlineSync.question('\n\nWelcome to Missionaries and Cannibals Game Solver \nPlease enter a number: '));
	console.log(game.solve(input));
	
}

driveGame();