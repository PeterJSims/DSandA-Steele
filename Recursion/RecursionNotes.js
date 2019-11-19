//Helper method recursion

const collectOddValues = (arr) => {
	let result = [];

	const helper = (helperInput) => {
		if (helperInput.length === 0) return;

		if (helperInput[0] % 2 !== 0) {
			result.push(helperInput[0]);
		}
		helper(helperInput.slice(1));
	};
	helper(arr);
	return result;
};

console.log(collectOddValues([ 2, 3, 2, 4, 5, 22, 3, 1 ]));

//Done purely recursively for reference
const collectOddPureRecursion = (arr) => {
	let newArr = [];

	if (arr.length === 0) return newArr;

	if (arr[0] % 2 !== 0) {
		newArr.push(arr[0]);
	}
	newArr = newArr.concat(collectOddPureRecursion(arr.slice(1)));
	return newArr;
};
