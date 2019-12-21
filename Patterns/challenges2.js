//does a pair of numbers in the array equal the average provided?

function averagePair(arr, avg) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		let movingAvg = (arr[left] + arr[right]) / 2;
		if (movingAvg === avg) {
			return true;
		} else if (movingAvg < avg) {
			left++;
		} else {
			right--;
		}
	}
	return false;
}

//does string2 contain the letters of string1 in order?

function isSubsequence(str1, str2) {
	let i = 0;
	let j = 0;
	while (j < str2.length) {
		if (str1[i] === str2[j]) i++;
		if (i === str1.length) return true;
		j++;
	}
	return false;
}

//What is the maximum sum of a group of numbers of num size
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
