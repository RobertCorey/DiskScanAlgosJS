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
var sum = 0;
var queue = [2069,1212,2296,2800,544,1618,356,1523,4965,3681];
var current = 2150;
queue.unshift(current);
var currentIndex = 0;
while(queue.length > 1){
	current = queue.splice(currentIndex,1);
	// console.log("Current: " + current);
	// console.log("List: " + queue);
	current = current[0];
	var result = getSmallestDifference(current,queue);
	// console.log("Index: " + result[0]);
	// console.log("Value: " + result[1]);
	sum += result[1];
}
console.log("Total Distance: " + sum);