//Liner search

const linearSearch = (arr, val) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) {
			return i;
		}
	}
	return -1;
};

//Binary search

const binarySearch = (arr, val) => {
	let left = 0;
	let right = arr.length - 1;
	let middle = Math.floor((left + right) / 2);

	while (left <= right && arr[middle] !== val) {
		if (val < arr[middle]) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
		middle = Math.floor((left + right) / 2);
	}

	return arr[middle] === val ? middle : -1;
};

//Naive string search

const naiveSearch = (long, short) => {
	let count = 0;
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) break;
			if (j === short.length - 1) count++;
		}
	}
	return count;
};

console.log(naiveSearch('lorie loled lloll', 'lol'));
