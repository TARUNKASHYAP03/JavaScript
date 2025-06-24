// for loop
// for (let i = 0; i < 5; i++) {
//     const element = i;
//     if (element === 2) {
//         console.log("Found 2");
//     }
//     console.log(element);
// }

for (let i = 1; i < 5; i++) {
    console.log("Table: ", i);
    for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j.toString().padStart(2)} = ${String(i * j).padStart(2)}`);
}
}