let a = 10;
let b = 14;
let c = 10;

if (a === b && b === c) {
  console.log("Equilateral");  // All side Equal
} else if (a === b || b === c || c === a) {
  console.log("Isosceles");    // Any two side equal
} else {
  console.log("Scalene");      // All side is different
}
