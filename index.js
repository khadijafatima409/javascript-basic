// 1. Compare Two Numbers (Operators + Conditions)
//  Write a program that takes two numbers and logs true if the first number is
// greater than the second, otherwise false. write simpel code in js.

let a = 5;
let b = 3;

if (a > b) {
  console.log(true);
} else {
  console.log(false);
}

// 2. Grade Calculator (If–Else)
// Take a score (0–100) as input and print grade:
// A / B / C / D / F based on the score.

let marks = 75;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 80) {
  console.log("B");
} else if (marks >= 70) {
  console.log("C");
} else if (marks >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// 3. Multiplication Table (Loops)
// Ask the user for a number and print its multiplication table (1–10) using a for loop.

let num = 5;

for (let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + num * i);
}

// 4. Factorial Function (Loops + Functions)
// Write a function named factorial(n) that returns the factorial of a number using a while loop.

function factorial(n) {
  let result = 1;

  while (n > 1) {
    result = result * n;
    n--;
  }

  return result;
}

console.log(factorial(5));

// 5. Check Prime Number Function (Logic + Functions)
// Write a function isPrime(num) that returns true if the number is prime, otherwise false.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));

// 6. Sum of Digits (Loops + Operators)
// Write a program that takes a positive number and calculates the sum of its digits using
//  a while loop and % operator.

let number = 1234;
let sum = 0;

while (number > 0) {
  sum = sum + (number % 10);
  number = Math.floor(number / 10);
}

console.log(sum);

// 7. Print Triangle of Stars (Nested Loops)
// Write a program that prints:

// *
// **
// ***
// ****
// *****
// based on user input height n.

let n = 5;

for (let i = 1; i <= n; i++) {
  let stars = "";

  for (let j = 1; j <= i; j++) {
    stars = stars + "*";
  }

  console.log(stars);
}
