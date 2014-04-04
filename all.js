var queue = [2069,1212,2296,2800,544,1618,356,1523,4965,3681];
var current = 2150;
var former = 1805;
var MAX = 4999;
//Helper Functions
function sortNumber(a,b) {
    return a - b;
}
function getDirection (head,prev) {
	if(head <= prev){
		return "left";
	}
	else{
		return "right";
	}
}
function getMin (myArray) {
	var min = myArray[0];
	for (var i = 1; i < myArray.length; i++) {
		if(myArray[i] < min){
			min = myArray[i];
		}
	}
	return min;
}
function getMax (myArray) {
	var max = myArray[0];
	for (var i = 1; i < myArray.length; i++) {
		if (max < myArray[i]) {
			max = myArray[i];
		}
	}
	return max;
}
//helper for cscan and c-look
function getHeadSibling (myArray, number,side) {
	for (var i = 0; i < myArray.length; i++) {
			if (myArray[i] < number && myArray[i+1] > number) {
				var theLeft = myArray[i];
				var theRight = myArray[i+1];
			}
		}
	if (side === "left") {
		return theLeft;
	}
	else{
		return theRight;
	}
}
//First Come First Serve
function FCFS (queue,current) {
	var nums = queue;
	var current = current;
	var sum = 0;
	for (var i = 0; i < nums.length; i++){
		var difference = Math.abs(current - nums[i]);
		// console.log("Current Cylinder: " + current);
		// console.log("Target Cylinder: " + nums[i]);
		// console.log("Distance: " + difference);
		sum += difference;
		current = nums[i];
	}
	console.log("FCFS: " + sum);
}
//Shortest Seek Time First
function getSmallestDifference(number,numberArray){
	//assume index 0 is the smallest
	var smallestDifferenceIndex = 0;
	var smallestDifferenceValue = Math.abs(number - numberArray[0]);
	for (var i = 1; i < numberArray.length; i++) {
		var currentCompareDifference = Math.abs(number - numberArray[i]);
		if (currentCompareDifference < smallestDifferenceValue) {
			smallestDifferenceIndex = i;
			smallestDifferenceValue = currentCompareDifference;
		}
	}
	var returnArray = [smallestDifferenceIndex,smallestDifferenceValue];
	return returnArray;
}
var SSTF = function (current,queue) {
	var queueCopy = queue.slice();
	var sum = 0;
	queueCopy.unshift(current);
	var currentIndex = 0;
	while(queueCopy.length > 1){
		current = queueCopy.splice(currentIndex,1);
		// console.log("Current: " + current);
		// console.log("List: " + queueCopy);
		current = current[0];
		var result = getSmallestDifference(current,queueCopy);
		// console.log("Closest Index: " + result[0]);
		// console.log("Closest Value: " + queueCopy[result[0]]);
		// console.log("Difference: " + result[1] + "\n");
		currentIndex = result[0];
		sum += result[1];
	}
	console.log("SSTF: " + sum);
};

function scan (head,prev,queue,maxCylinderIndex) {
	var sum = 0;
	var direction = getDirection(head,prev);
	queue = queue.sort(sortNumber);
	if (direction === "left"){
		sum += head - 1;
		sum += getMax(queue);
		return sum;
	}
	else if(direction === "right"){
		sum += maxCylinderIndex - head;
		sum += maxCylinderIndex - getMin(queue);
		return sum;
	}
}

function cscan (head,prev,queue,maxCylinderIndex) {
	var sum = 0;
	var direction = getDirection(head,prev);
	queue = queue.sort(sortNumber);
	if (direction === "left"){
		sum += head - 1;
		sum += maxCylinderIndex - getHeadSibling(queue,head,"right");
		return sum;
	}
	else if(direction === "right"){
		sum += maxCylinderIndex - head;
		sum += getHeadSibling(queue,head,"left")
		return sum;
	}
}

function look (current,previous,queue) {
	var sum = 0;
	direction = getDirection(current,previous);
	if(direction === "left"){
		sum += current - queue[0];
		sum += queue[(queue.length - 1)] - queue[0];
		console.log(sum);
	}
	else{
		sum += queue[(queue.length - 1)] -  current;
		sum += queue[(queue.length - 1)] - queue[0];
		console.log("Look: " + sum);
	}
}

function clook (current,previous,queue) {
	var sum = 0;
	direction = getDirection(current,previous);
	if(direction === "left"){
		sum += current = queue[0];
		sum += queue[(queue.length - 1)] - getHeadSibling(queue,current,"right");
		console.log(sum);
	}
	else{
		sum += queue[(queue.length - 1)] - current;
		sum += getHeadSibling(queue,current,"left") - queue[0];
		console.log("C-look: " + sum);
	}
}

FCFS(queue,current);
SSTF(current,queue);
console.log("Scan: " + scan(current,former,queue,MAX));
look(current,former,queue);
console.log("C-Scan: " + cscan(current,former,queue,MAX));
clook(current,former,queue);