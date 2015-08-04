function reverseArray(arr) {
	var output = [];
	for(var i= arr.length - 1; i >= 0; i--) {
		output.push(arr[i]);
	}
	return output;
}

function reverseArrayInPlace(arr) {
	var forwardElm;
	var reverseElm;
	var lastElm = arr.length - 1;
	for(var i=0; i < arr.length/2; i++) {
		forwardElm = arr[i];
		reverseElm = arr[lastElm - i];
		arr[i] = reverseElm;
		arr[lastElm-i] = forwardElm;
	}
}

