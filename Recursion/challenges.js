//mimic function of Math.pow()

function power(num, exp) {
	if (exp === 0) return 1;

	return num * power(num, exp - 1);
}

//factorial

function factorial(num) {
	if (num === 0) return 1;

	return num * factorial(num - 1);
}

//recursive range (add from 1 to number)
function recursiveRange(num) {
	if (num === 0) return 0;

	return num + recursiveRange(num - 1);
}

//fibonacci - return nth number in sequence
function fib(num) {
	if (num < 2) return num;
	return fib(num - 1) + fib(num - 2);
}
