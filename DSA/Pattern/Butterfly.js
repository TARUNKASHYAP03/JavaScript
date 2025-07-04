function upperBt(n) {
  for (let i = 1; i <= (n - 1) / 2; i++) {
    let str = "";
    for (let k = 1; k <= i; k++) {
      str += "*";
    }
    let sp = n - 2 * i;
    for (let j = 1; j <= sp; j++) {
      str += " ";
    }
    for (let l = 1; l <= i; l++) {
      str += "*";
    }
    console.log(str);
  }
}

function middBt(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += "*";
  }
  console.log(str);
}

function lowerBt(n) {
  for (let i = (n - 1) / 2; i >= 1; i--) {
    let str = "";
    for (let k = 1; k <= i; k++) {
      str += "*";
    }
    let sp = n - 2 * i;
    for (let j = 1; j <= sp; j++) {
      str += " ";
    }
    for (let l = 1; l <= i; l++) {
      str += "*";
    }
    console.log(str);
  }
}

function printP(a) {
  if (a % 2 !== 0) {
    upperBt(a);
    middBt(a);
    lowerBt(a);
  } else {
    console.log("Only print odd number");
  }
}

printP(11);
