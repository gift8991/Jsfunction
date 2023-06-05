/* 1 Create a function that will be able to convert figures from Fahrenheit to Celsius.
 */
function fahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  return celsius;
}
ry
const temperatureInFahrenheit = 77;
const temperatureInCelsius = fahrenheitToCelsius(temperatureInFahrenheit);
console.log(temperatureInCelsius); //fahrenheitToCelsius (25) 
 


/*2 Create a function that will calculate the average of numbers in an array.
 */
const myArray = [1, 2, 3, 4, 5];
const result = calculateAverage(myArray);
console.log(result);

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  const total = numbers.reduce(function(sum, value) {
    return sum + value;
  }, 0);
  
  const average = total / numbers.length;
  return average;
} //calculateAverage (3)

/*3 Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.
 */

 function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

const n = 60;
const x = 12;
const y = 6;

console.log(isDivisible(n, x, y)); //isDivisible (true)



/*4 Create a function that will output the first 100 prime numbers.
 */
function checkPrime(num) {
  if (num < 2) {
    return 0;
  } else {
    let x = Math.floor(num / 2);
    for (let j = 2; j <= x; j++) {
      if (num % j === 0) {
        return 0;
      }
    }
  }
  return 1;
}

let a = 1, b = 100;
for (let i = a; i <= b; i++) {
  if (checkPrime(i)) {
    console.log(i);
  }
}//checkPrime(3, 5, 7, 11......... 97) 

/*5 Create a function that will return a boolean specifying if a number is a prime number */

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}//isPrime(true) 

/*6 Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.
 */

function getPositiveNumbers(numbers) {
  return numbers.filter(number => number > 0);
}

const numbers = [-2, 5, 0, -8, 10, -3, 15];
const positiveNumbers = getPositiveNumbers(numbers);
console.log(positiveNumbers);
//getPoditiveNimbrrs([5, 10, 15])  

/*7 Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".
 */

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/*8  The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
It must start with a hash symbol, #.
Ignore all spaces in the input.
All words must have their first letter capitalized.
If the final result is going to be longer than 140 characters, it should return false.
If the input or result is an empty string, it should return false
*/

function generateHashtag(input) {
  // Check for empty input or result
  if (!input || input.trim() === "") {
    return false;
  }

  // Remove spaces and split the input into words
  const words = input.trim().split(" ");

  // Capitalize the first letter of each word and join them
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const hashtag = "#" + capitalizedWords.join("");

  // Check if the final result exceeds 140 characters
  if (hashtag.length > 140) {
    return false;
  }

  return hashtag;
}
console.log(generateHashtag("hello world")); // Output: "#HelloWorld"
console.log(generateHashtag("  welcome  to  openai   ")); // Output: "#WelcomeToOpenai"
console.log(generateHashtag("")); // Output: false
console.log(generateHashtag(" ".repeat(150))); // Output: false