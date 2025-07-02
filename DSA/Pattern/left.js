function printRt(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    // print decreasing spaces
    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }

    // print increasing stars
    for (let k = 1; k <= i; k++) {
      str += "*";
    }

    console.log(str);

  }
}

printRt(20);
