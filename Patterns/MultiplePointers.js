//find the first pair of integers whose sum equals 0

//naive O(n^2)
const sumZeroNaive = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [ arr[i], arr[j] ];
			}
		}
	}
};

//multiple pointers

const sumZero = (arr) => {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		if (arr[left] + arr[right] === 0) {
			return [ arr[left], arr[right] ];
		} else if (arr[left] + arr[right] > 0) {
			right--;
		} else {
			left++;
		}
	}
	return undefined;
};

// console.log(sumZero([ -3, -2, -1, 0, 1, 2, 3 ]));
// console.log(sumZero([ -2, 0, 1, 3 ]));
// console.log(sumZero([ 1, 2, 3 ]));
// console.log(sumZero([ -2, -1, 0, 1, 2, 3 ]));

function countUniqueValues(arr) {
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	console.log(i + 1);
	return i + 1;
}

countUniqueValues([ 1, 1, 1, 1, 1, 2 ]); // 2
countUniqueValues([ 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13 ]); // 7
countUniqueValues([]); // 0
countUniqueValues([ -2, -1, -1, 0, 1 ]); // 4
