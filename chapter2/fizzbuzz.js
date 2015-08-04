var count = 1;
var str = "";
while(count <= 100) {
	
	if(count % 5 === 0 && count % 3 === 0) {
		str = "FizzBuzz"
	} else if(count % 3 == 0) {
		str = "Fizz";
	} else if(count % 5 == 0) {
		str ="Buzz";
	} else {
		str = count;
	}

	console.log(str);
	count++;
}