// operators in js are special symbols that performs operations on one or more
// operads in our js file system.

// 1. Arithmetic operations
// addition
let sum = 5 + 3;
console.log(sum)

// subtractions
let difference = 10 - sum;
console.log(difference)

// multiplication
let product = sum * difference;
console.log(product)

// division
let quotient = product / 4;
console.log(quotient)

// modulus
let remainder = quotient % 3;
console.log(remainder);

// 2. Assignment Operators
// These operators assign values to variables

// assignment
let x = 5;
console.log(x)

// addition assignment
let y = 5;
y += 1;
console.log(y)

// subtraction assignment
let z = 10;
z -= y;
console.log(z)

// 3. Comparison Operators
// These operators compare values and return a boolean value

// Equal
console.log(5 == "5");

// strict Equal 
console.log(5 === "5");

// Not Equal
console.log(5 != "5");
let n = 3
let m = 2

console.log(n != m)

// strict Not Equal
console.log(5 !== "5");
let u = "Alenjandro"
let q = 10
console.log(u != z)

// Greater than
console.log(10 > 5)
let g = 12
let k = 10

console.log(k > g)

// less than
console.log(3 < 2)
let l = 12
let i = 10
let w = l - i
console.log(x < w)

// Greater than and equal
console.log(4 >= 5);
let t = 6
let v = 6
let b = u * 2
console.log(t >= v)

let o = v - 3

console.log(b >= o)

// using logical operators declare four variables that logs boolean value on 
// console.
// using comments on the vs code editor explain the meaning and how it functions.


// Declare four variables with boolean values
let isRaining = true;
let isSunny = false;
let isCloudy = true;
let isWindy = false;

// Using logical operators to combine the boolean variables
let isWeatherGood = isSunny && !isRaining; // Checks if it's sunny and not raining
let isWeatherBad = isRaining || isWindy; // Checks if it's raining or windy
let isWeatherUnpredictable = (isCloudy && isWindy) || (isRaining && isSunny); // Checks for multiple conditions

// Output the results to the console
console.log(isWeatherGood); // Output: false
console.log(isWeatherBad); // Output: true
console.log(isWeatherUnpredictable); // Output: true

const hasDriverLicense = true;
const hasInsurance = true;

const carDrive = hasDriverLicense && hasInsurance;
console.log(carDrive);

const isAdult = true;
const isHungry = false;

const canEnter = isAdult && isHungry;
console.log(canEnter);

const knowsHTML = false;
const knowCSS = true;
const canDesignWebsite = knowsHTML || knowCSS;
console.log(canDesignWebsite);

const isAdmin = false;
const isSuperUser = false;

const canAccessPage = isAdmin || isSuperUser;
console.log(canAccessPage);
