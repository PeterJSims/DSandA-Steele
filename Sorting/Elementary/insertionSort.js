const insertionSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j > 0; j--) {
			if (arr[j - 1] > arr[j]) {
				let temp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = temp;
			}
		}
	}
	console.log(arr);
	return arr;
};

insertionSort([ 2, 1, 9, 13, 4 ]);
