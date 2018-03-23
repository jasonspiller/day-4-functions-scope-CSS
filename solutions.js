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


// Pythagoras
function calculateSide(intSideA, intSideB) {
	// check to make sure arguments are numbers
	if (typeof intSideA === "number" && typeof intSideB === "number" ) {
		return Math.sqrt(Math.pow(intSideA, 2) + Math.pow(intSideB, 2));
	} else {
		return "Please enter valid numerical values."
	}
}
console.log(calculateSide(8,6));


// Array summer
function sumArray(arrNumbers) {

	let intSum = 0;

	// loop through array and add each value
	arrNumbers.forEach(function(num){
  	intSum += num;
	});
	// check for a valid number if not cast it to a string and return error message
	if (isNaN(intSum)) {
		intSum = "Please enter a valid numerical values.";
	}
	return intSum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));


// Prime numbers
function checkPrime(intNum) {
	// loop through possible numbers until you get to the square root of the number
  for(let i = 2; i <= Math.sqrt(intNum); i++)
    if(intNum % i === 0) {
			return false;
	}
  return true;
}
console.log(checkPrime(97));

function printPrimes(intNum) {
	// loop through all numbers up to the argument
	for (let i = 2; i < intNum; i++) {
		// call func to check if prime
		if (checkPrime(i)) {
			console.log(i);
		}
	}
}
printPrimes(100);
