function deepEqual(a,b) {
	if(a === null && b === null) {
		return true;
	} else if(a === null && b !== null) {
		return false;
	} else if(a !==null && b === null) {
		return false;
	} else {
		var unEqual = false;
		for(prop in a) {
			if(a[prop] !== b[prop]) {
				unEqual = true;
				break;
			}
		}

		for(prop in b) {
			if(a[prop] !== b[prop]) {
				unEqual = true;
				break;
			}
		}
		return !unEqual;
	}

}
