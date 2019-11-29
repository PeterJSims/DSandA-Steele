//Swapping function
const swap = (arr, index1, index2) => {
	[ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ];
};

const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (i !== min) swap(arr, i, min);
	}

	return arr;
};

console.log(selectionSort([ 1, 4, 3, 6, 23, 14, 17, 9 ]));
