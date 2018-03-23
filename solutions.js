// 2. What is the difference between a parameter and an argument?
// Parameter is a variable for the function. Arguments are what you pass to the function.

// 3. Within a function, what is the difference between return and console.log?
// return is the value that is return from a function call. You can also return the same function to create a recursive function. Console.log(); is a method that outputs to the console specifically.


// Palindrome
function checkPalindrome(strWord) {
	return strWord.toUpperCase() === strWord.split('').reverse().join('').toUpperCase();
}
console.log(checkPalindrome('test'));


// Digit summer
function sumDigits(intNum) {

	// convert to string and split array
	let arrDigits = intNum.toString().split(''),
			intSum = 0;

	// loop through array
	for (let i = 0; i < arrDigits.length; i++) {
		// convert to number and add each digit to sum variable
		intSum += Number(arrDigits[i]);
	}

	// check for a valid number if not cast it to a string and return error message
	if (isNaN(intSum)) {
		intSum = "Please enter a valid number.";
	}
	return intSum;
}
console.log(sumDigits(42));
