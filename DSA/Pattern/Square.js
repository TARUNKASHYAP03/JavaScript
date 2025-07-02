// function printSq(n) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       process.stdout.write("* ");
//     }
//     process.stdout.write("\n");
//   }
// }

// printSq(5);

function printSq(n) {
  for (let i = 1; i <= n; i++) {
    let str=""
    for (let j = 1; j <= n; j++) {
        str+="* "
    }
    console.log(str);
    
  }
}

printSq(65);
