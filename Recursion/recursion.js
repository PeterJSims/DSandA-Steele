const iterativeFactorial = (num) => {
	let sum = 1;

	for (let i = 1; i <= num; i++) {
		sum *= i;
	}
	return sum;
};

console.log(iterativeFactorial(5));

const factorial = (num) => {
	if (num === 1) return 1;

	return num * factorial(num - 1);
};

console.log(factorial(5));

//Helper method recursion
//useful when you have data that needs to persist through every call

function collectOddValues(arr) {
	let result = [];
	function helper(helperInput) {
		if (helperInput.length === 0) {
			return;
		}
		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}
		helper(helperInput.slice(1));
	}
	helper(arr);
	return result;
}

console.log(collectOddValues([ 1, 2, 4, 5, 7, 23, 12 ]));

//Above as pure recursion
function collectOddValuesRecursive(arr) {
	let newArr = [];

	if (arr.length === 0) {
		return newArr;
	}

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}

	newArr = newArr.concat(collectOddValuesRecursive(arr.slice(1)));
	return newArr;
}
