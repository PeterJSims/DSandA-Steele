const factorial = (num) => {
	if (num === 0) return 1;
	return num * factorial(num - 1);
};

console.log(factorial(5));

const sumRange = (num) => {
	if (num === 1) return 1;

	return num + sumRange(num - 1);
};

console.log(sumRange(25));

const power = (num, exp) => {
	if (exp === 0) return 1;

	return num * power(num, exp - 1);
};

console.log(power(3, 3));

const productOfArray = (arr) => {
	if (arr.length === 0) {
		return 1;
	}
	return arr[0] * productOfArray(arr.slice(1));
};
console.log(productOfArray([ 1, 2, 3, 4, 5 ]));

const fib = (num) => {
	if (num < 2) return num;
	return fib(num - 1) + fib(num - 2);
};

console.log(fib(4));
