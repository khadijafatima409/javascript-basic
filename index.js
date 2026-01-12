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
