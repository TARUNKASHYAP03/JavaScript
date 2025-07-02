let arr = [1, 2, 8, 5, 6, 10, 3, 9, 7];

let sum = 0;
let newSum = 0;

function SumN() {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log(sum);
}

SumN();

let sort = arr.sort((a, b) => a - b);
console.log(sort);

function misingNum() {
  let min = sort[0];
  let max = sort[sort.length - 1];

  for (let i = min; i <= max; i++) {
    newSum += i;
  }

  console.log("Expected sum:", newSum);
  console.log("Missing number:", newSum - sum);
}

misingNum();
