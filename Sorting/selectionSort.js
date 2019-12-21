const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		let temp = arr[i];
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		arr[i] = arr[min];
		arr[min] = temp;
	}
	console.log(arr);
	return arr;
};

selectionSort([ 3, 2, 5, 1, 3, 7, 12, 32, 0 ]);
