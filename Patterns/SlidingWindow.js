function maxSubarraySumNaive(arr, num) {
	if (arr.length === 0) return null;

	let max = 0;
	for (let i = 0; i < arr.length - num; i++) {
		temp = 0;
		for (let j = 0; j < num; j++) {
			temp += arr[i + j];
		}
		if (temp > max) {
			max = temp;
		}
	}
	return max;
}

function maxSubarraySum(arr, num) {
	if (arr.length < num) return null;

	let maxSum = 0;
	let tempSum = 0;
	//this is just a loop to get the first num amount of items in the array added to start
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}
	tempSum = maxSum;
	//i = num skips the items grabbed above
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}
	console.log(maxSum);
	return maxSum;
}

maxSubarraySum([ 1, 2, 5, 2, 8, 1, 5 ], 2); // 10
maxSubarraySum([ 1, 2, 5, 2, 8, 1, 5 ], 4); // 17
maxSubarraySum([ 4, 2, 1, 6 ], 1); // 6
maxSubarraySum([ 4, 2, 1, 6, 2 ], 4); // 13
maxSubarraySum([], 4); // null
