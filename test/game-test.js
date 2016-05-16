'use strict'
var gameLogic = require('../src/game');

exports.setUp = function(done) {
	gameLogic = require('../src/game');
	done();
}

exports.tearDown = function(done) {
	delete require.cache[require.resolve('../src/game')]
	done();
}

exports.testCanary = function(test) {
	test.ok(true);
	test.done();
}

exports.isValid1Missionaries0CannibalsOnLeft = function(test) {
	test.ok(gameLogic.isValid(1, [1, 0, 0]));
	test.done();
}

exports.isValid0Missionaries1CannibalsOnLeft = function(test) {
	test.ok(gameLogic.isValid(1, [0, 1, 0]));
	test.done();
}

exports.isValidMissionariesEqualsCannibalsOnLeftBank = function(test) {
	test.ok(gameLogic.isValid(2, [2, 2, 1]));
  	test.done();
}

exports.isValidMissionariesLessThanCannibalsOnLeftBank = function(test) {
	test.ok(!gameLogic.isValid(2, [1, 2, 1]));
  	test.done();
}

exports.isValidMissionariesIsNCannibalsIsZeroOnLeftBank = function(test) {
	test.ok(gameLogic.isValid(2, [2, 0, 0]));
  	test.done();
}

exports.isValidLeftBank2Missonaries2Cannibals = function(test) {
	test.ok(gameLogic.isValid(2, [2, 2, 1]));
	test.done();
}

exports.isValidLeftBank2Missonaries1Cannibals = function(test) {
	test.ok(gameLogic.isValid(2, [2, 1, 1]));
	test.done();
}

exports.isValidLeftBank2Missonaries0Cannibals = function(test) {
	test.ok(gameLogic.isValid(2, [2, 0, 0]));
	test.done();
}

exports.isValidLeftBank2MissonariesNegativeOneCannibals = function(test) {
	test.ok(!gameLogic.isValid(2, [2, -1, 1]));
	test.done();
}

exports.isValidLeftBankNegativeMissonariesNegativeOneCannibals = function(test) {
	test.ok(!gameLogic.isValid(2, [-1, 1, 1]));
	test.done();
}

exports.isValidLeftBank2Missonaries3Cannibals = function(test) {
	test.ok(!gameLogic.isValid(2, [2, 3, 1]));
	test.done();
}

exports.isValidLeftBank1Missionries0CannibalsViolatesRuleOnRightBank = function(test) {
	test.ok(!gameLogic.isValid(2, [1, 0, 0]));
	test.done();
}

exports.isValid1Missionaries3CannibalsBoatOnLeftAndNIs2 = function(test) {
	test.ok(!gameLogic.isValid(2, [0, 3, 1]));
	test.done();
}

exports.getMovesListReturnsCorrectListForMaxOf2 = function(test) {
	test.deepEqual([[ 0, 2 ], [ 1, 1 ], [ 2, 0 ], [ 0, 1 ], [ 1, 0 ]], gameLogic.getCompleteMovesList());
	test.done();
}

exports.getPossibleMovesFor1Missionary1CannibalsBoatOnLeftNIs1 = function(test) {
	test.deepEqual([[ 0, 0, 0 ], [ 1, 0, 0 ], [ 0, 1, 0 ]], gameLogic.getPossibleMoves(1, [1, 1, 1]));
	test.done();
}

exports.getPossibleMovesFor0Missionary1CannibalsBoatOnLeftNIs1 = function(test) {
	test.deepEqual([[0, 0, 0]], gameLogic.getPossibleMoves(1, [0, 1, 1]));
	test.done();
}

exports.getPossibleMovesFor1Missionary0CannibalsBoatOnLeftNIs1 = function(test) {
	test.deepEqual([[0, 0, 0]], gameLogic.getPossibleMoves(1, [1, 0, 1]));
	test.done();
}

exports.getPossibleMovesFor2Missionary2CannibalsBoatOnLeftNIs2 = function(test) {
	test.deepEqual([[ 2, 0, 0 ], [ 1, 1, 0 ], [ 0, 2, 0 ], [ 2, 1, 0 ]], gameLogic.getPossibleMoves(2, [2, 2, 1]));
	test.done();
}

exports.getPossibleMovesFor2Missionary1CannibalsBoatOnLeftNIs2 = function(test) {
	test.deepEqual([[ 0, 1, 0 ], [ 2, 0, 0 ], [ 1, 1, 0 ]], gameLogic.getPossibleMoves(2, [2, 1, 1]));
	test.done();
}

exports.getPossibleMovesFor1Missionary1CannibalsBoatOnLeftNIs2= function(test) {
	test.deepEqual([[ 0, 0, 0 ], [ 0, 1, 0 ]], gameLogic.getPossibleMoves(2, [1, 1, 1]));
	test.done();
}

exports.getPossibleMovesFor1Missionary1CannibalsBoatOnRightNIs2 = function(test) {
	test.deepEqual([[2, 2, 1], [2, 1, 1]], gameLogic.getPossibleMoves(2, [1, 1, 0]));
  	test.done();
}

exports.getPossibleMovesFor2Missionary1CannibalsBoatOnRightNIs2 = function(test) {
	test.deepEqual([[2, 2, 1]], gameLogic.getPossibleMoves(2, [2, 1, 0]));
  	test.done();
}

exports.getPossibleMovesFor0Missionary1CannibalsBoatOnRightNIs2 = function(test) {
	test.deepEqual([[2, 1, 1], [0, 2, 1], [1, 1, 1]], gameLogic.getPossibleMoves(2, [0, 1, 0]));
  	test.done();
}

exports.getPossibleMovesFor3Missionary1CannibalsBoatOnRightNIs3 = function(test) {
	test.deepEqual([[3, 3, 1], [3, 2, 1]], gameLogic.getPossibleMoves(3, [3, 1, 0]));
  	test.done();
}

exports.getPossibleMovesFor3Missionary2CannibalsBoatOnLeftNIs3 = function(test) {
	test.deepEqual([[3, 0, 0], [3, 1, 0],  [2, 2, 0]], gameLogic.getPossibleMoves(3, [3, 2, 1]));
  	test.done();
}

exports.buildTreeForNIs1 = function(test) {
	var tree = [ { id: 1,
						parent: 0,
						node: [ 0, 0, 0 ],
						pathTaken: [ [ 1, 1, 1 ], [ 0, 0, 0 ] ] } ];
	
	test.deepEqual(tree, gameLogic.buildTreeOfMoves(1));
	test.done();
}

exports.buildTreeForNIs2 = function(test) {
	var tree =[ { id: 1,
						parent: 0,
						node: [ 2, 0, 0 ],
						pathTaken: [ [ 2, 2, 1 ], [ 2, 0, 0 ] ] },
					{ id: 2,
						parent: 1,
						node: [ 2, 1, 1 ],
						pathTaken: [ [ 2, 2, 1 ], [ 2, 0, 0 ], [ 2, 1, 1 ] ] },
					{ id: 3,
						parent: 2,
						node: [ 0, 1, 0 ],
						pathTaken: [ [ 2, 2, 1 ], [ 2, 0, 0 ], [ 2, 1, 1 ], [ 0, 1, 0 ] ] },
					{ id: 4,
						parent: 3,
						node: [ 0, 2, 1 ],
						pathTaken: [ [ 2, 2, 1 ], [ 2, 0, 0 ], [ 2, 1, 1 ], [ 0, 1, 0 ], [ 0, 2, 1 ] ] },
					{ id: 5,
						parent: 4,
						node: [ 0, 0, 0 ],
						pathTaken:[ [ 2, 2, 1 ],[ 2, 0, 0 ],[ 2, 1, 1 ],[ 0, 1, 0 ],[ 0, 2, 1 ],[ 0, 0, 0 ] ] } ];
	
	test.deepEqual(tree, gameLogic.buildTreeOfMoves(2));
	test.done();
}

exports.buildTreeForNIs3 = function(test) {
	var tree =[ { id: 1,
						parent: 0,
						node: [ 3, 1, 0 ],
						pathTaken: [ [ 3, 3, 1 ], [ 3, 1, 0 ] ] },
					{ id: 2,
						parent: 1,
						node: [ 3, 2, 1 ],
						pathTaken: [ [ 3, 3, 1 ], [ 3, 1, 0 ], [ 3, 2, 1 ] ] },
					{ id: 3,
						parent: 2,
						node: [ 3, 0, 0 ],
						pathTaken: [ [ 3, 3, 1 ], [ 3, 1, 0 ], [ 3, 2, 1 ], [ 3, 0, 0 ] ] },
					{ id: 4,
						parent: 3,
						node: [ 3, 1, 1 ],
						pathTaken: [ [ 3, 3, 1 ], [ 3, 1, 0 ], [ 3, 2, 1 ], [ 3, 0, 0 ], [ 3, 1, 1 ] ] },
					{ id: 5,
						parent: 4,
						node: [ 1, 1, 0 ],
						pathTaken:
						[ [ 3, 3, 1 ],[ 3, 1, 0 ],[ 3, 2, 1 ],[ 3, 0, 0 ],[ 3, 1, 1 ],[ 1, 1, 0 ] ] },
					{ id: 6,
						parent: 5,
						node: [ 2, 2, 1 ],
						pathTaken:
						[ [ 3, 3, 1 ],[ 3, 1, 0 ],[ 3, 2, 1 ],[ 3, 0, 0 ],[ 3, 1, 1 ],[ 1, 1, 0 ],[ 2, 2, 1 ] ] },
					{ id: 7,
						parent: 6,
						node: [ 0, 2, 0 ],
						pathTaken:
						[ [ 3, 3, 1 ],[ 3, 1, 0 ],[ 3, 2, 1 ],[ 3, 0, 0 ],[ 3, 1, 1 ],[ 1, 1, 0 ],[ 2, 2, 1 ],[ 0, 2, 0 ] ] },
					{ id: 8,
						parent: 7,
						node: [ 0, 3, 1 ],
						pathTaken:
						[ [ 3, 3, 1 ],[ 3, 1, 0 ],[ 3, 2, 1 ],[ 3, 0, 0 ],[ 3, 1, 1 ],[ 1, 1, 0 ],[ 2, 2, 1 ],[ 0, 2, 0 ],[ 0, 3, 1 ] ] },
					{ id: 9,
						parent: 8,
						node: [ 0, 1, 0 ],
						pathTaken:
						[ [ 3, 3, 1 ],[ 3, 1, 0 ],[ 3, 2, 1 ],[ 3, 0, 0 ],[ 3, 1, 1 ],[ 1, 1, 0 ],[ 2, 2, 1 ],[ 0, 2, 0 ],[ 0, 3, 1 ],[ 0, 1, 0 ] ] },
					{ id: 10,
						parent: 9,
						node: [ 0, 2, 1 ],
						pathTaken:
						[ [ 3, 3, 1 ],[ 3, 1, 0 ],[ 3, 2, 1 ],[ 3, 0, 0 ],[ 3, 1, 1 ],[ 1, 1, 0 ],[ 2, 2, 1 ],[ 0, 2, 0 ],[ 0, 3, 1 ],[ 0, 1, 0 ],[ 0, 2, 1 ] ] },
					{ id: 11,
						parent: 10,
						node: [ 0, 0, 0 ],
						pathTaken:
						[ [ 3, 3, 1 ],[ 3, 1, 0 ],[ 3, 2, 1 ],[ 3, 0, 0 ],[ 3, 1, 1 ],[ 1, 1, 0 ],[ 2, 2, 1 ],[ 0, 2, 0 ],[ 0, 3, 1 ],[ 0, 1, 0 ],[ 0, 2, 1 ],[ 0, 0, 0 ] ] } ];
	 
	test.deepEqual(tree, gameLogic.buildTreeOfMoves(3));
	test.done();
}					
					
exports.buildTreeForNIs4 = function(test) {
	var tree = [ { id: 1,
						parent: 0,
						node: [ 4, 2, 0 ],
						pathTaken: [ [ 4, 4, 1 ], [ 4, 2, 0 ] ] },
					{ id: 2,
						parent: 1,
						node: [ 4, 3, 1 ],
						pathTaken: [ [ 4, 4, 1 ], [ 4, 2, 0 ], [ 4, 3, 1 ] ] },
					{ id: 3,
						parent: 2,
						node: [ 4, 1, 0 ],
						pathTaken: [ [ 4, 4, 1 ], [ 4, 2, 0 ], [ 4, 3, 1 ], [ 4, 1, 0 ] ] },
					{ id: 4,
						parent: 3,
						node: [ 4, 2, 1 ],
						pathTaken: [ [ 4, 4, 1 ], [ 4, 2, 0 ], [ 4, 3, 1 ], [ 4, 1, 0 ], [ 4, 2, 1 ] ] },
					{ id: 5,
						parent: 4,
						node: [ 4, 0, 0 ],
						pathTaken:[ [ 4, 4, 1 ],[ 4, 2, 0 ],[ 4, 3, 1 ],[ 4, 1, 0 ],[ 4, 2, 1 ],[ 4, 0, 0 ] ] },
					{ id: 6,
						parent: 5,
						node: [ 4, 1, 1 ],
						pathTaken:[ [ 4, 4, 1 ],[ 4, 2, 0 ],[ 4, 3, 1 ],[ 4, 1, 0 ],[ 4, 2, 1 ],[ 4, 0, 0 ],[ 4, 1, 1 ] ] },
					{ id: 7,
						parent: 4,
						node: [ 2, 2, 0 ],
						pathTaken:[ [ 4, 4, 1 ],[ 4, 2, 0 ],[ 4, 3, 1 ],[ 4, 1, 0 ],[ 4, 2, 1 ],[ 2, 2, 0 ] ] },
					{ id: 8,
						parent: 7,
						node: [ 3, 3, 1 ],
						pathTaken:[ [ 4, 4, 1 ],[ 4, 2, 0 ],[ 4, 3, 1 ],[ 4, 1, 0 ],[ 4, 2, 1 ],[ 2, 2, 0 ],[ 3, 3, 1 ] ] },
					{ id: 9,
						parent: 2,
						node: [ 3, 3, 0 ],
						pathTaken: [ [ 4, 4, 1 ], [ 4, 2, 0 ], [ 4, 3, 1 ], [ 3, 3, 0 ] ] },
					{ id: 10,
						parent: 0,
						node: [ 3, 3, 0 ],
						pathTaken: [ [ 4, 4, 1 ], [ 3, 3, 0 ] ] },
					{ id: 11,
						parent: 10,
						node: [ 4, 3, 1 ],
						pathTaken: [ [ 4, 4, 1 ], [ 3, 3, 0 ], [ 4, 3, 1 ] ] },
					{ id: 12,
						parent: 11,
						node: [ 4, 1, 0 ],
						pathTaken: [ [ 4, 4, 1 ], [ 3, 3, 0 ], [ 4, 3, 1 ], [ 4, 1, 0 ] ] },
					{ id: 13,
						parent: 12,
						node: [ 4, 2, 1 ],
						pathTaken: [ [ 4, 4, 1 ], [ 3, 3, 0 ], [ 4, 3, 1 ], [ 4, 1, 0 ], [ 4, 2, 1 ] ] },
					{ id: 14,
						parent: 13,
						node: [ 4, 0, 0 ],
						pathTaken:[ [ 4, 4, 1 ],[ 3, 3, 0 ],[ 4, 3, 1 ],[ 4, 1, 0 ],[ 4, 2, 1 ],[ 4, 0, 0 ] ] },
					{ id: 15,
						parent: 14,
						node: [ 4, 1, 1 ],
						pathTaken:[ [ 4, 4, 1 ],[ 3, 3, 0 ],[ 4, 3, 1 ],[ 4, 1, 0 ],[ 4, 2, 1 ],[ 4, 0, 0 ],[ 4, 1, 1 ] ] },
					{ id: 16,
						parent: 13,
						node: [ 2, 2, 0 ],
						pathTaken:[ [ 4, 4, 1 ],[ 3, 3, 0 ],[ 4, 3, 1 ],[ 4, 1, 0 ],[ 4, 2, 1 ],[ 2, 2, 0 ] ] },
					{ id: 17,
						parent: 16,
						node: [ 3, 3, 1 ],
						pathTaken:[ [ 4, 4, 1 ],[ 3, 3, 0 ],[ 4, 3, 1 ],[ 4, 1, 0 ],[ 4, 2, 1 ],[ 2, 2, 0 ],[ 3, 3, 1 ] ] },
					{ id: 18,
						parent: 11,
						node: [ 4, 2, 0 ],
						pathTaken: [ [ 4, 4, 1 ], [ 3, 3, 0 ], [ 4, 3, 1 ], [ 4, 2, 0 ] ] },
					{ id: 19,
						parent: 0,
						node: [ 4, 3, 0 ],
						pathTaken: [ [ 4, 4, 1 ], [ 4, 3, 0 ] ] } ];
	
	test.deepEqual(tree, gameLogic.buildTreeOfMoves(4));
	test.done();
}

exports.parseSolutionRetsPathForSolution2 = function(test) {
	
	gameLogic.buildTreeOfMoves = function(n) {
		return [{ id: 5,parent: 4,node: [ 0, 0, 0 ],pathTaken:[ [ 2, 2, 1 ],[ 2, 0, 0 ],[ 2, 1, 1 ],[ 0, 1, 0 ],[ 0, 2, 1 ],[ 0, 0, 0 ] ] } ];
	}
	
	test.deepEqual([ true,[ [ 2, 2, 1 ],[ 2, 0, 0 ],[ 2, 1, 1 ],[ 0, 1, 0 ],[ 0, 2, 1 ],[ 0, 0, 0 ] ] ], gameLogic.parseSolution(2));
	test.done();
}

exports.parseSolutionRetsPathForSolution3 = function(test) {
	
	gameLogic.buildTreeOfMoves = function(n) {
		return [ { id: 10,
					parent: 9,
					node: [ 0, 2, 1 ],
					pathTaken:
						[ [ 3, 3, 1 ],[ 3, 1, 0 ],[ 3, 2, 1 ],[ 3, 0, 0 ],[ 3, 1, 1 ],[ 1, 1, 0 ],[ 2, 2, 1 ],[ 0, 2, 0 ],[ 0, 3, 1 ],[ 0, 1, 0 ],[ 0, 2, 1 ] ] },
					{ id: 11,
					parent: 10,
					node: [ 0, 0, 0 ],
					pathTaken:
						[ [ 3, 3, 1 ],[ 3, 1, 0 ],[ 3, 2, 1 ],[ 3, 0, 0 ],[ 3, 1, 1 ],[ 1, 1, 0 ],[ 2, 2, 1 ],[ 0, 2, 0 ],[ 0, 3, 1 ],[ 0, 1, 0 ],[ 0, 2, 1 ],[ 0, 0, 0 ] ] } ];
	}
	
	test.deepEqual([ true,[ [ 3, 3, 1 ],[ 3, 1, 0 ],[ 3, 2, 1 ],[ 3, 0, 0 ],[ 3, 1, 1 ],[ 1, 1, 0 ],[ 2, 2, 1 ],[ 0, 2, 0 ],[ 0, 3, 1 ],[ 0, 1, 0 ],[ 0, 2, 1 ],[ 0, 0, 0 ] ]] , gameLogic.parseSolution(3));
	test.done();
}

exports.parseSolutionRetsPathForSolution4 = function(test) {
	
	gameLogic.buildTreeOfMoves = function(n) {
		return [	{ id: 16,
						parent: 13,
						node: [ 2, 2, 0 ],
						pathTaken:[ [ 4, 4, 1 ],[ 3, 3, 0 ],[ 4, 3, 1 ],[ 4, 1, 0 ],[ 4, 2, 1 ],[ 2, 2, 0 ] ] },
					{ id: 17,
						parent: 16,
						node: [ 3, 3, 1 ],
						pathTaken:[ [ 4, 4, 1 ],[ 3, 3, 0 ],[ 4, 3, 1 ],[ 4, 1, 0 ],[ 4, 2, 1 ],[ 2, 2, 0 ],[ 3, 3, 1 ] ] }];
	}
	
	test.deepEqual([false,"There is no solution for n = 4"], gameLogic.parseSolution(4));
	test.done();
}

exports.printSolutionForNEquals1 = function(test) {

	test.deepEqual("N = 1\nShortest number of moves: 1\n    M  C  B | M  C  B \n0   1, 1, 1 | 0, 0, 0\n1   0, 0, 0 | 1, 1, 1\n", gameLogic.solve(1));
	test.done();
}

exports.printSolutionForNEquals2 = function(test) {

	test.deepEqual("N = 2\nShortest number of moves: 5\n    M  C  B | M  C  B \n0   2, 2, 1 | 0, 0, 0\n1   2, 0, 0 | 0, 2, 1\n2   2, 1, 1 | 0, 1, 0\n3   0, 1, 0 | 2, 1, 1\n4   0, 2, 1 | 2, 0, 0\n5   0, 0, 0 | 2, 2, 1\n", gameLogic.solve(2));
	test.done();
}

exports.printSolutionForNEquals3 = function(test) {

	test.deepEqual("N = 3\nShortest number of moves: 11\n    M  C  B | M  C  B \n0   3, 3, 1 | 0, 0, 0\n1   3, 1, 0 | 0, 2, 1\n2   3, 2, 1 | 0, 1, 0\n3   3, 0, 0 | 0, 3, 1\n4   3, 1, 1 | 0, 2, 0\n5   1, 1, 0 | 2, 2, 1\n6   2, 2, 1 | 1, 1, 0\n7   0, 2, 0 | 3, 1, 1\n8   0, 3, 1 | 3, 0, 0\n9   0, 1, 0 | 3, 2, 1\n10   0, 2, 1 | 3, 1, 0\n11   0, 0, 0 | 3, 3, 1\n", gameLogic.solve(3));
	test.done();
}

exports.printSolutionForNEquals4 = function(test) {

	test.deepEqual("There is no solution for n = 4", gameLogic.solve(4));
	test.done();
}