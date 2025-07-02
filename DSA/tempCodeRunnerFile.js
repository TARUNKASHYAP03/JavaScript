let arr = [1, 2, 8, 5, 6, 10, 8, 9, 7];

let sum = 0;

function SumN() {
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  console.log(sum);
}

SumN();

let sort = arr.sort((a, b) => a - b);
console.log(sort);

function misingNum() {}
