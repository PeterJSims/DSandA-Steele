const swap = (arr, index1, index2) => {
	[ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ];
};

const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i + 1; j >= 0; j--) {
			if (arr[j] < arr[j - 1]) {
				swap(arr, j, j - 1);
			}
		}
	}

	return arr;
};

//Colt's

// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

console.log(insertionSort([ 3, 2, 4, 5, 12, 21, 33, 8 ]));
