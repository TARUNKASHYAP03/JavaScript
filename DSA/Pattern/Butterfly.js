function upparBt(n) {
  for (let i = 1; i <= (n - 1) / 2; i++) {
    let str = "";
    let leftstar = i;
    for (let k = 1; k <= leftstar; k++) {
      str += "*";
    }
    let sp = n - 2 * i;

    for (let j = 1; j <= sp; j++) {
      str += " ";
    }

    let rightStar = i;
    for (let l = 1; l <= rightStar; l++) {
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
  for (let i = (n-2)/2; i <=1 ; i--) {
    let str = "";
    let leftstar = i;
    for (let k = 1; k <= leftstar; k++) {
      str += "*";
    }
    let sp = n - 2 * i;

    for (let j = 1; j <= sp; j++) {
      str += " ";
    }

    let rightStar = i;
    for (let l = 1; l <= rightStar; l++) {
      str += "*";
    }
    console.log(str);
  }
}

const a=5
upparBt(a);
middBt(a);
lowerBt(a)