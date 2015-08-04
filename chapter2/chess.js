var size = 7;	// Size of Chess Grid
var odd = "";	// Variable for Generating
var even = "";

for(var i = 0; i < size; i++) {
	if(i % 2 == 0) {
		odd += " ";
		even += "#";
	} else {
		odd += "#";
		even += " ";
	}
}

for(var i = 0; i < size; i++) {
	if(i % 2 == 0) {
		console.log(even);
	} else {
		console.log(odd);
	}
} 