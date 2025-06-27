let meraPromise = new Promise(function(resolve, reject) {
  let kaamHoGaya = true;

  if (kaamHoGaya) {
    resolve("Kaam ho gaya!");
  } else {
    reject("Kaam fail ho gaya.");
  }
});

meraPromise.then(function(result) {
  console.log(result); // "Kaam ho gaya!"
}).catch(function(error) {
  console.log(error); // agar fail hota to "Kaam fail ho gaya."
});
