function arrayToList(arr) {
	var list = null;
	for(var i=arr.length -1; i >=0; i--) {
		list = {value: arr[i], rest: list};
	}
	return list;
}

function prepend(element, list) {
	return {value: element, rest: list};
}

function listToArray(list) {
	var arr = [];
	while(list !== null) {
		arr.push(list.value);
		list = list.rest;
	}
	return arr;
}

function nth(pos, list) {
	var i=1;
	var value = undefined;
	while(list !== null) {
		if(i===pos) {
			value = list.value;
			break;
		}
		list = list.rest;
		i++;
	}

	return value;
}


function rNth(pos, list) {
	if(list === null) {
		return;
	}

	if(pos === 1) {
		return list.value;
	}
	pos = pos - 1;
	list = list.rest;

	return nth(pos,list);
}