var queue = [2069,1212,2296,2800,544,1618,356,1523,4965,3681];
var current = 2150;
var previous = 1805;
queue = queue.sort(sortNumber)
var sum = 0;
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
direction = getDirection(current,previous);

if(direction === "left"){
	sum += current - queue[0];
	sum += queue[(queue.length - 1)] - queue[0];
	console.log(sum);
}
else{
	sum += queue[(queue.length - 1)] -  current;
	sum += queue[(queue.length - 1)] - queue[0];
	console.log(sum);
}