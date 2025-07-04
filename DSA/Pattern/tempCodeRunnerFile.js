// function printRt(n) {
//   for (let i = 1; i <= n-1; i++) {
//     let str = "";

//     // print decreasing spaces
//     for (let j = 1; j <= n - i; j++) {
//       str += " ";
//     }

//     // print increasing stars
//     for (let k = 1; k <= 2*i-1; k++) {
//       str += "*";
//     }

//     console.log(str);

//   }
// }

// printRt(5);

function upparTri(n) {
  for (let i = 1; i <= n - 1; i++) {
    let str = "";

    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }

    // print increasing stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      str += "*";
    }

    console.log(str);
  }
}

upparTri(5);
