//JS tricks version
function sameFrequencyJS(n1, n2) {
	let sorted1 = n1.toString().split('').sort().join('');
	let sorted2 = n2.toString().split('').sort().join('');
	return sorted1 === sorted2;
}

function sameFrequency(n1, n2) {
	let numCount = {};
	let string1 = n1.toString();
	let string2 = n2.toString();

	for (let i = 0; i < string1.length; i++) {
		numCount[string1[i]] ? numCount[string1[i]]++ : (numCount[string1[i]] = 1);
	}
	for (let i = 0; i < string2.length; i++) {
		if (!numCount[string2[i]]) {
			return false;
		} else {
			numCount[string2[i]]--;
		}
	}
	return true;
}

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));

//duplicates in arguments JS trick
function areThereDuplicatesJS(...args) {
	return new Set(arguments).size !== arguments.length;
}

function areThereDuplicates(...args) {
	let argsArray = args.sort();
	let i = 0;

	for (let j = 1; j < argsArray.length; j++) {
		if (argsArray[i] === argsArray[j]) {
			return true;
		} else {
			i++;
			argsArray[i] = argsArray[j];
		}
	}
	return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'd', 'a'));
