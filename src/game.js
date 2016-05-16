'use strict'

var MAX_PEOPLE_ON_BOAT = 2;

exports.solve = function(n) {
	var printSolution = exports.parseSolution(n);

	if(printSolution[0]) {
        var showMoves = "N = " + n + "\nShortest number of moves: " + (printSolution[1].length - 1) + "\n" + "    M  C  B | M  C  B \n";
		
        for (var increment = 0; increment < printSolution[1].length; increment++) {
          	var state = printSolution[1][increment];
      	    showMoves +=  increment + "   " + state[0] + ", " + state[1] + ", " + state[2] +  " | " + (n - state[0]) + ", " + (n - state[1]) + ", " + (Number(!state[2]))  + "\n";
		}
		return showMoves;
	}
	else
        return printSolution[1];
}

exports.isValid = function(n, leftBank) {
	var missionariesOnLeftBank = leftBank[0];
	var cannibalsOnLeftBank = leftBank[1];
	var missionariesOnRightBank = n - leftBank[0];
	var cannibalsOnRightBank = n - leftBank[1];
	var validBoat = leftBank[2];
  
	return (n > 0 
				&&  missionariesOnLeftBank >= 0 
				&& cannibalsOnLeftBank >=0 
				&& (validBoat === 1 || validBoat === 0 )
				&& missionariesOnLeftBank <= n 
				&& cannibalsOnLeftBank <= n 
				&& (cannibalsOnLeftBank <= missionariesOnLeftBank || missionariesOnLeftBank === 0)
				&& (cannibalsOnRightBank  <= missionariesOnRightBank || missionariesOnRightBank === 0)) 
} 

exports.getCompleteMovesList = function() {
	var allMoves = [];
	for(var maxCountDown = MAX_PEOPLE_ON_BOAT; maxCountDown > 0; maxCountDown--) {
		for(var increment = 0; increment <= maxCountDown; increment++)
			allMoves.push([increment, maxCountDown - increment]);
	}
	return allMoves;
}

exports.getPossibleMoves = function(n, leftBank) {
	var possibleMove = exports.getCompleteMovesList();
	var moves = [];
	var currentmissionariesOnLeftBank = leftBank[0];
	var currentcannibalsOnLeftBank = leftBank[1];
  
	var boatOnLeftAfterMove = Number(!leftBank[2]);
	for(var oneMove in possibleMove) {
		var movingMissionaries =  possibleMove[oneMove][0];
		var movingCannibals =  possibleMove[oneMove][1];
    
		if(boatOnLeftAfterMove)
			var resultingMove = [currentmissionariesOnLeftBank + movingMissionaries, currentcannibalsOnLeftBank + movingCannibals, boatOnLeftAfterMove];
		else
			var resultingMove = [currentmissionariesOnLeftBank - movingMissionaries, currentcannibalsOnLeftBank - movingCannibals, boatOnLeftAfterMove];
    
		if(exports.isValid(n, resultingMove))
			moves.push(resultingMove);
	}
	return moves;   
}

exports.buildTreeOfMoves = function(n)  {
	var completePathsList = [];
	var idIncrementer = 0;
	var leftBank = [n , n , 1];
	
	var recursionBuilding = function(nodeElement) {

		var possibleMoves = exports.getPossibleMoves(n, nodeElement.node)
		
		for(var move = 0; move < possibleMoves.length; move++) {
					
			if(JSON.stringify(completePathsList).indexOf( [0, 0, 0].toString() ) === -1 && JSON.stringify(nodeElement.pathTaken).indexOf(possibleMoves[move].toString()) === -1 ){
				var individualPath = nodeElement.pathTaken.slice();
				individualPath.push(possibleMoves[move]);
				var childElement = {id: idIncrementer++, parent: nodeElement.id, node: possibleMoves[move], pathTaken: individualPath};
				completePathsList.push(childElement);
          	
				recursionBuilding(childElement);
			}
		}
	}
	
	var root = {id: idIncrementer++, parent: 0, node: leftBank, pathTaken: [leftBank]};
	recursionBuilding(root);
	
	return completePathsList;
}

exports.parseSolution = function(n) {
	
	var allPaths = exports.buildTreeOfMoves(n);
	
	var solution = [false,"There is no solution for n = " + n];
	for(var path in allPaths){
		if(JSON.stringify(allPaths[path].node) === JSON.stringify([0,0,0])){
			solution = [true, allPaths[path].pathTaken];

		}
			
	}
		
	return solution;
}