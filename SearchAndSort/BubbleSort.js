//Swapping code

const swap = (arr, index1, index2) => {
	[ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ];
};

const bubbleSort = (arr) => {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
	return arr;
};

console.log(bubbleSort([ 3, 2, 4, 6, 2, 1, 32, 5 ]));
