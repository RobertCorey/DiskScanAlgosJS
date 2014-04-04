//globals
var queue = [2069,1212,2296,2800,544,1618,356,1523,4965,3681];
var current = 2150;
var former = 1805;
// FCFS
function FCFS (queue,current) {
	var nums = queue;
	var current = current;
	var sum = 0;
	console.log("FCFS");
	for (var i = 0; i < nums.length; i++){
		var difference = Math.abs(current - nums[i]);
		console.log("Current Cylinder: " + current);
		console.log("Target Cylinder: " + nums[i]);
		console.log("Distance: " + difference);
		sum += difference;
		current = nums[i];
	}
	console.log("Total: " + sum);
}
FCFS(queue,current);