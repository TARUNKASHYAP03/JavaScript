// function printFibo(n) {
//   if (n === 0) {
//     console.log(0);
//     console.log("Sum:", 0);
//     return;
//   }

//   let secondLast = 0;
//   let last = 1;
//   let sum = 0;

//   console.log(secondLast); // 0
//   sum += secondLast;

//   if (n >= 1) {
//     console.log(last); // 1
//     sum += last;
//   }

//   for (let i = 2; i <= n; i++) {
//     let ans = last + secondLast;
//     console.log(ans);
//     sum += ans;
//     secondLast = last;
//     last = ans;
//   }

//   console.log("Sum:", sum);
// }

// printFibo(5);

var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
};

console.log(fib(5));

