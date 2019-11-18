//Anagram

//Using JS tricks
const validAnagram1 = (str1, str2) => sorted(str1) === sorted(str2);

const sorted = (str) => str.toLowerCase().split('').sort().join('');

console.log(validAnagram1('cat', 'tag'));
console.log(validAnagram1('twitter', 'rettwti'));

//Using frequency counting

const validAnagram = (str1, str2) => {
	if (str1.length !== str2.length) return false;
	let obj = {};

	for (let i = 0; i < str1.length; i++) {
		let letter = str1[i];
		obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
	}

	for (let i = 0; i < str2.length; i++) {
		let letter = str2[i];
		if (!obj[letter]) {
			return false;
		} else {
			obj[letter] -= 1;
		}
	}
	return true;
};

console.log(validAnagram('cat', 'tag'));
console.log(validAnagram('twitter', 'rettwti'));
