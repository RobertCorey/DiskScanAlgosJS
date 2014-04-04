var queue = [2069,1212,2296,2800,544,1618,356,1523,4965,3681];
var current = 2150;
var previous = 1805;
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
//of the head
function cscan (head,prev,queue,maxCylinderIndex) {
	var sum = 0;
	var direction = getDirection(head,prev);
	queue = queue.sort(sortNumber);
	if (direction === "left"){
		sum += head - 1;
		sum += maxCylinderIndex;
		sum += maxCylinderIndex - getHeadSibling(queue,head,"right");
		return sum;
	}
	else if(direction === "right"){
		sum += maxCylinderIndex - head;
		sum += maxCylinderIndex;
		sum += getHeadSibling(queue,head,"left")
		return sum;
	}
}
var result = cscan(current,previous,queue,4999);
console.log(result);
