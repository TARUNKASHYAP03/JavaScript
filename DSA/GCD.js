function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function getArrayGCDAndLCM(arr) {
  let g = arr[0];
  let l = arr[0];

  for (let i = 1; i < arr.length; i++) {
    g = gcd(g, arr[i]);
    l = lcm(l, arr[i]);
  }

  return { gcd: g, lcm: l };
}

// Example
let arr = [6, 12, 24, 40, 100];
const result = getArrayGCDAndLCM(arr);
console.log(`Array: ${arr}`);
console.log(`GCD: ${result.gcd}`);
console.log(`LCM: ${result.lcm}`);
