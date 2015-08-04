function range(start, end, step) {
	step = step || 1;
	var output = [];

	if(step < 0) {
		for(var i=start; i >= end; i = i + step) {
			output.push(i);
		}
	} else {
		for(var i=start; i <= end; i = i + step) {
			output.push(i);
		}
	}
	
	return output;
}

function sum(numbers) {
	var result = 0;
	for(var i=0; i < numbers.length; i++) {
		result += numbers[i];
	}
	return result;
}

console.log(range(1,10,2));