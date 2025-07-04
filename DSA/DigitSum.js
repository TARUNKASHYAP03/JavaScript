// function printSum(num) {
//   let sum = 0;
//   let str = String(num);
//   for (let i = 0; i < str.length; i++) {
//     sum += Number(str[i]);
//   }
//   return sum;
// }

// function printSum(num) {
//   let sum = 0;
//   while (num >= 10) {
//     sum += num % 10; // last digit
//     num = Math.floor(num / 10); // remaining digits
//   }
//   return sum;
// }

// let digit = 4132;

// console.log(`Digit ${digit} Sum`, printSum(digit));

function printSum(num) {
  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num;
}

let digit = 4132;
console.log(`Digit ${digit} Sum:`, printSum(digit)); // Output: 1

// let addDigits = function (num) {
//   while (num >= 10) {
//     let sum = 0;
//     let str = String(num);
//     for (let i = 0; i < str.length; i++) {
//       sum += Number(str[i]);
//     }
//     num = sum;
//   }
//   return num;
// };

// console.log(addDigits(4132));
