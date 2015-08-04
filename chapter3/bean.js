function countBs(str) {
	var count = countChar(str,"B");
 	return count;
}

function countChar(str, character) {
	var count = 0;
	for(var i=0; i<str.length; i++) {
		if(str.charAt(i) === character) {
			count++;
		}
	}
	return count;
}

console.log(countBs("I am BBB, and you are idioB"));