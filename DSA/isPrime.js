// function isPrime(x) {
//   if (x < 2) return false;

//   for (let i = 2; i < Math.sqrt(x); i++) {
//     if (x % i == 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(2));

function isPrime(x) {
  if (x < 2) return false;

  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }

  return true;
}

function printPrimesInRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      console.log(i);
    //   process.stdout.write(i.toString() + " ");
    }
  }
}

printPrimesInRange(0, 100);
