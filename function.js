// function
// function is a block of code that performs and action and is
// reuseable.

// types of function
// function declaration
// function expression

// 1, function declaration
function add(a, b) {
    return(a+b)
}

const sum= add(2,4);
console.log(sum)

function product(y, x) {
    return(y*x)
}

const multiplication= product(4,5);
console.log(multiplication)

function greet(name){
    console.log(`Hello ${name} Welcome to our app`)
}
greet("John")
greet("Phillips")

const name = "Doe"
console.log(`Hello ${name}`)

function portfolio(name, course) {
    console.log(`My name is ${name},  I study ${course} at Havard University`)
}

portfolio("Opeyemi", "Full stack Development")

// function Expression

const add2 = function (a, b) {
    return a + b
}
const sum2 = add(1, 2)
console.log(sum2)

const greet2 = function (name,) {
    console.log(`Hello ${name}`)
}
greet2("John")

const greet3 = function (name, course, school) {
    console.log(`Hello ${name},  I study ${course} at ${school}`)
}
greet3("John", "Full stack dev", "New Horizon")


// Arrow Function
// Arrow functions: a more concise way to write functions in JavaScript. They have a shorter syntax compared to traditional function expressions and do not have their own binding, which makes them particularly useful in certain contexts like array methods and as callback functions.
// They are defined using the => syntax.

// Arrow Function to Welcome Someone into Your Application
const welcomeUser = (name) => `Welcome to the application, ${name}!`;

console.log(welcomeUser("Alice")); 

// Arrow Function that Returns the Sum of 3 Numbers
const sumOfThree = (a, b, c) => a + b + c;

console.log(sumOfThree(1, 2, 3)); 

// Arrow Function that Returns the Modulus (%) of 2 Numbers
const modulus = (a, b) => a % b;

console.log(modulus(10, 3)); 






