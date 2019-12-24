//Helpers

//getDigit - returns the digit in num at the given place value
const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

//digitCount - returns the number of digits

const digitCount = (num) => {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
};
//my version
const digitCountMe = (num) => num.toString().length;

//maxDigits- find largest number in list of numbers

const maxDigits = (nums) => {
	let most = 0;
	for (let i = 0; i < nums.length; i++) {
		most = Math.max(most, digitCount(nums[i]));
	}
	return most;
};

//actual radixSort

const radixSort = (nums) => {
	let maxDigitCount = maxDigits(nums);
	for (let i = 0; i < maxDigitCount; i++) {
		let digitBuckets = Array.from({ length: 10 }, () => []);
		for (let j = 0; j < nums.length; j++) {
			let digit = getDigit(nums[j], i);
			digitBuckets[digit].push(nums[j]);
		}
		nums = [].concat(...digitBuckets);
	}
	console.log(nums);
	return nums;
};

radixSort([ 234, 431, 12, 99, 5, 4211 ]);
