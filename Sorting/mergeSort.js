const merge = (arr1, arr2) => {
	let merged = [];
	let i = 0;
	let j = 0;
	while (i < arr1.length && j < arr2.length) {
		if (arr2[j] > arr1[i]) {
			merged.push(arr1[i]);
			i++;
		} else {
			merged.push(arr2[j]);
			j++;
		}
	}
	while (i < arr1.length) {
		merged.push(arr1[i]);
		i++;
	}
	while (j < arr2.length) {
		merged.push(arr2[j]);
		j++;
	}
	return merged;
};

const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;
	let mid = Math.floor(arr.length / 2);
	let left = mergeSort(arr.slice(0, mid));
	let right = mergeSort(arr.slice(mid));
	return merge(left, right);
};

console.log(mergeSort([ 2, 4, 6, 1, 12, 6, 9 ]));
