// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
	if (n === 0) {
		return 1;
	}
	if (n < 0) {
		return null;
	}
	return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
	var result = 0;
	if (array.length === 0) {
		return result;
	}
	result = array.shift();
	return result += sum(array);
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	var result = 0,
	adding = function(arr) {
		arr.forEach(function(element) {
			if (Array.isArray(element)) {
				adding(element);
			}
			else {
				result += element;
			}
		});
	}
	adding(array);
	return result;
};

// 4. Check if a number is even.
var isEven = function(n) {
	var n = n / 2;
	n = n.toString().split('');
	var result = true,
	traverseArray = function(array) {
		if (array.length === 0) {
			return;
		}
		else if (array[0].charCodeAt() === 46) {
			result = false;
			return;
		}
		else {
			traverseArray(array.slice(1));
		}
	}
	traverseArray(n);
	return result;
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	var array = [], i = 0, result = 0, sumAllButLast;
	if (n === 0) { return 0; }
	if (n > 0) {
		for (i = 0; i < n+1; i++) {
			array.push(i);
		}
	}
	else {
		for (i = 0; i >= n; i--) {
			array.push(i);
		}
	}
	sumAllButLast = function(array) {
		if (array.length === 1) {
			return;
		}
		else {
			result += array[0];
			sumAllButLast(array.slice(1));
		}
	}
	sumAllButLast(array.slice(1));
	return result;
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
	var result = [], numToPush = x,
	createRangeAB = function(start) {
		if (numToPush + 1 === y) {
			return;
		}
		else if (numToPush !== y) {
			numToPush++
			result.push(numToPush);
			createRangeAB(numToPush);
		}
	},
	createRangeBA = function (start) {
		if (numToPush - 1 === y) {
			return;
		}
		else if (numToPush !== y) {
			numToPush--
			result.push(numToPush);
			createRangeBA(numToPush);
		}
	}
	if (x < y) {
		createRangeAB(numToPush);
	}
	else {
		createRangeBA(numToPush);
	}
	return result;
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if (exp === 0) {
		return 1;
	}
	if (exp < 0) {
		return 1 / exponent(base, exp);
	}
	return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {

};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(str) {
	var result = [];
	var splitStr = str.split('');
	var reverser = function(array) {
		if (array.length === 0) {
			return;
		}
		else {
			result.push(array.splice(array.length-1, 1)[0]);
			reverser(array);
		}
	}
	reverser(splitStr);
	return result.join('');
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	string = string.toLowerCase().replace(/\s/g, '');
	var splitString = string.split('');
	var result = false;
	var isPalindrome = function(array) {
		if (array.length === 0) {
			result = true;
		}
		else if (array[0] === array[array.length -1]) {
			array.pop();
			array.shift();
			isPalindrome(array)
		}
		else {
			result = false;
			return result;
		}
	}
	isPalindrome(splitString);
	return result;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if (y === 1) {
    return x;
  } else if (y === -1) {
    return -(x)
  }
  else if (x < 0 && y < 0){
    return -(x) + multiply(x, ++y);
  } else {
    return x + multiply(x, --y);
  }
}

// var multiply = function(x,z) {
// 	var result = [],
// 	staging = function(y) {
// 		if (result.length === y) {
// 			return;
// 		}
// 		else {
// 			result.push(x);
// 			staging(y);
// 		}
// 	}
// 	staging(z);
// 	return eval(result.join('+'));
// };

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
	if (x === 0 && y === 0) {
		return 'NaN';
	}
	else if (x === 0 || x < y) {
		return 0;
	}
	else if (x > 0 && y < 0) {
		return -1 + divide(x + y, y);
	}
	else if (x < 0 && y < 0 && -(x) < -(y)) {
		return 0;
	}
	return 1 + divide(x-y, y);
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y, divisor) {
	var counter = 0;
	divisor = 1;
	if (x % x === 0 && y % x === 0) {
		return x;
	}
	else if (y % y === 0 && x % y === 0) {
		return y;
	}
	else if (x % divisor === 0 && y % divisor === 0) {
		divisor = divisor + 1;
		return counter + 1 && gcd(x, y, divisor);
	}
	// else if (x === divisor) {
	// 	if (y % divisor === 0) {
	// 		counter = counter + 1;
	// 		return counter * 2;	
	// 	} else {
	// 		return counter * 2;
	// 	}
	// }
	// else if (y === divisor) {
	// 	if (x % divisor === 0) {
	// 		counter = counter + 1;
	// 		return counter * 2;	
	// 	} else {
	// 		return counter * 2;
	// 	}
	// }
	else if (x % divisor !== 0 || y % divisor !== 0) {
		divisor = divisor + 1;
		return gcd(x, y, divisor);
	}
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	if (!Array.isArray(str1) && !Array.isArray(str2)) {
		str1 = str1.split('');
		str2 = str2.split('');
		return compareStr(str1, str2);
	}
	else if (str1.length === 0 && str2.length === 0) {
		return true;
	}
	else if (str1[0] === str2[0]) {
		str1.shift();
		str2.shift();
		return true === compareStr(str1, str2);
	}
	return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
	var result = [];
	if (array.length === 0) {
		return [];
	}
	result = result.concat(array.splice(array.length - 1, 1));
	return result.concat(reverseArr(array));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	var result = [];
	length = length - 1;
	if (length === 0) {
		return [value];
	}
	if (Array.isArray(value)) {
		result = result.concat([value]);
		return result.concat(buildList(value, length));	
	}
	result = result.concat(value);
	return result.concat(buildList(value, length));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	var result = 0;
	if (array.length === 0) {
		return 0;
	}
	result = array[0] === value ? result + 1 : result;
	array = array.slice(1);
	return result + countOccurrence(array, value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	var results = [];
	if (array.length === 0) {
		return results;
	}
	results.push(callback(array[0]));
	return results.concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, targetKey) {
	var counter = 0, key;
	for (key in obj) {
		if (key === targetKey) {
			counter++;
		} else if (typeof obj[key] === 'object') {
			counter += countKeysInObj(obj[key], targetKey);
		}
	}
	return counter;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var counter = 0, key;
	for (key in obj) {
		if (obj[key] === value) {
			counter++;
		} else if (typeof obj[key] === 'object') {
			counter += countValuesInObj(obj[key], value);
		}
	}
	return counter;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	var key;
	for (key in obj) {
		if (key === oldKey) {
			obj[newKey] = obj[oldKey];
			delete obj[oldKey];
			if (typeof obj[newKey] === 'object') {
				replaceKeysInObj(obj[newKey], oldKey, newKey);
			}
		} 
	}
	return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
	var results = [];
	if (input.length === 0) {
		return results;
	}
	results.push(input.splice(0,1)[0].toUpperCase());
	return results.concat(capitalizeWords(input)) 
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
	var results = [];
	if (array.length === 0) {
		return results;
	}
	results.push(array[0][0].toUpperCase() + array[0].slice(1));
	array.shift();
	return results.concat(capitalizeFirst(array));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	var result = 0, key;
	for (key in obj) {
		if (obj[key] % 2 === 0) {
			result += obj[key];
		} else if (typeof obj[key] === 'object') {
			result += nestedEvenSum(obj[key]);
		}
	}
	return result;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
	var results = [], i;
	for (i = 0; i < arrays.length; i++) {
		if (!Array.isArray(arrays[i])) {
			results.push(arrays[i]);
		} else {
			results = results.concat(flatten(arrays[i]));
		}
	}
	return results;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}

var letterTally = function(str, obj) {
	if (obj === undefined) {
		obj = {};
	}
	if (str.length === 0) {
		return obj;
	} 
	if (obj[str[0]] === undefined) {
		obj[str[0]] = 1;
	} else {
		obj[str[0]] = obj[str[0]] + 1;
	}
	return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, shiftValue) {

};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	var results = [], shiftValue;
	if (array.length === 0) {
		return results;
	}
	shiftValue = array.shift();
	shiftValue.push(aug);
	results.push(shiftValue);
	return results.concat(augmentElements(array, aug));
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === 0 && array[i + 1] === 0) {
			array.splice(i + 1, 1);
			return minimizeZeroes(array);
		}
	}
	return array;
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, toggle) {
	var results = [], toggle = toggle, shiftValue;
	if (array.length === 0) {
		return results;
	}
	if (toggle === undefined) {
		toggle = true;
	}
	if (toggle === true) {
		toggle = false;
		if (array[0] > 0) {
			shiftValue = array.shift();
			results.push(shiftValue);
		} else {
			shiftValue = array.shift();
			shiftValue = -(shiftValue);
			results.push(shiftValue);
		}
	}
	else if (toggle === false) {
		toggle = true;
		if (array[0] < 0) {
			shiftValue = array.shift();
			results.push(shiftValue);
		} else {
			shiftValue = array.shift();
			shiftValue = -(shiftValue);
			results.push(shiftValue);
		}
	}
	return results.concat(alternateSign(array, toggle));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	var results = [], numStringObj = {1: 'one', 3: 'three', 5: 'five', 6: 'six'}, shiftValue;
	if (str.length === 0) {
		return results;
	}
	if (!Array.isArray(str)) {
		str = str.split(' ');
	}
	if (
			str[0].charCodeAt() === 49 || str[0].charCodeAt() === 51 || 
			str[0].charCodeAt() === 53 || str[0].charCodeAt() === 54
			) 
	{
		shiftValue = str.shift();
		shiftValue = numStringObj[shiftValue];
		results.push(shiftValue);
	} else {
		shiftValue = str.shift();
		results.push(shiftValue);
	}
	return results.concat(numToText(str)).join(' ');
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
	min = min || array[0];
	max = max || array[array.length - 1];
	if (target < min || target > max) { return null; }
	if (min === target) {
		return array.indexOf(min);
	}
	if (max === target) {
		return array.indexOf(max);	
	}
	if (min === max) {
		return min === target ? array.indexOf(max) : null;
	}
	if (min + 1 === max) {
		if (min === target) {
			return array.indexOf(min);
		} 
		else if (max === target) {
			return array.indexOf(max);
		} else {
			return null;
		}
	}
	if (min < target) {
		min = min + 1;
	}
	if (max > target) {
		max = --max;
	}
	return binarySearch(array, target, min, max);
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};
