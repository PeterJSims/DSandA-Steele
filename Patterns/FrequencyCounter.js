//returns true if arr2 contains a square of each item in arr1
const same = (arr1, arr2) => {
	if (arr1.length !== arr2.length) return false;

	let freqCounter1 = {};
	let freqCounter2 = {};

	for (let num of arr1) {
		freqCounter1[num] = (freqCounter1[num] || 0) + 1;
	}
	for (let num of arr2) {
		freqCounter2[num] = (freqCounter2[num] || 0) + 1;
	}

	for (let key in freqCounter1) {
		if (!(key ** 2 in freqCounter2)) return false;

		if (freqCounter2[key ** 2] !== freqCounter1[key]) return false;
	}

	return true;
};

// console.log(same([ 1, 2, 3 ], [ 4, 1, 9 ]));
// console.log(same([ 1, 2, 3 ], [ 1, 9 ]));

//Time complexity of O(n)

//anagrams

//slick JS way

//O(n log n) for .sort's quicksort and insertion sort
//O(1) for space since it sorts in place
const validAnagramJS = (str1, str2) => str1.split('').sort().join('') === str2.split('').sort().join('');

//O(n) for time complexity
//O(n) for space
const validAnagram = (str1, str2) => {
	if (str1.length !== str2.length) return false;
	let counter = {};

	for (let char of str1) {
		counter[char] ? counter[char]++ : (counter[char] = 1);
	}

	for (let char of str2) {
		if (!counter[char]) {
			return false;
		} else {
			counter[char]--;
		}
	}
	return true;
};

console.log(validAnagram('aab', 'baa'));
console.log(validAnagram('dcds', 'asdf'));
console.log(validAnagram('anagram', 'ramanag'));
