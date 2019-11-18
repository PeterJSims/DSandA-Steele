//Multiple Pointer Example
//THESE ONLY WORK ON SORTED ARRAYS

const sumZero = (arr) => {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let sum = arr[left] + arr[right];
		if (sum === 0) {
			return [ arr[left], arr[right] ];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
};

//Count Unique Values

const uniqueValues = (arr) => {
	if (arr.length === 0) return 0;
	let left = 0;
	for (let right = 1; right < arr.length; right++) {
		if (arr[left] !== arr[right]) {
			left++;
			arr[left] = arr[right];
		}
	}
	return left + 1;
};

console.log(uniqueValues([ 1, 1, 2, 3, 4, 4, 5, 6, 6 ]));
console.log(uniqueValues([]));
