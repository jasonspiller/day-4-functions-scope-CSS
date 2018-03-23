// 2. What is the difference between a parameter and an argument?
// Parameter is a variable for the function. Arguments are what you pass to the function.

// 3. Within a function, what is the difference between return and console.log?
// return is the value that is return from a function call. You can also return the same function to create a recursive function. Console.log(); is a method that outputs to the console specifically.


// Palindrome
function isPalindrome(word) {
	return word.toUpperCase() === word.split('').reverse().join('').toUpperCase();
}
console.log('Is palindrome? ' + isPalindrome('test'));
