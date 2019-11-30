//Merge end arrays
const mergeArrays = (arr1, arr2) => {
	let mergedArr = [];
	let i = 0;
	let j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			mergedArr.push(arr1[i]);
			i++;
		} else {
			mergedArr.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		mergedArr.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		mergedArr.push(arr2[j]);
		j++;
	}

	return mergedArr;
};

console.log(mergeArrays([ 1, 3, 7 ], [ 4, 6, 8 ]));

//split arrays

const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;
	let midpoint = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, midpoint));
	let right = mergeSort(arr.slice(midpoint));

	return mergeArrays(left, right);
};

console.log(mergeSort([ 2, 3, 12, 4, 8, 17, 4, 1 ]));
