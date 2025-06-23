// // const arr=[1,2,3,4,5,6,7,8,9,10];

// // console.log(arr[5]); // Accessing element at index 5
// // console.log(arr.length); // Length of the array

// // const myHeros=["thor","spiderman","ironman"];

// // // Array methods
// // myHeros.push("hulk"); // Add an element to the end
// // console.log(myHeros);

// // myHeros.pop(); // Remove an element from the end
// // console.log(myHeros);

// // myHeros.unshift("batman"); // Add an element to the beginning
// // console.log(myHeros);

// // myHeros.shift(); // Remove an element from the beginning
// // console.log(myHeros);

// // console.log(myHeros.includes("spiderman")); // Check if an element exists in the array

// // console.log(myHeros.indexOf("spiderman")); // Get the index of an element

// // console.log(myHeros.join(", "), typeof myHeros.join(", ")); // Join elements into a string

// // console.log(myHeros.slice(1, 3)); // Get a subarray from index 1 to 2 (exclusive)

// const arr = [1, 2, 3, 4, 5];
// // Array methods
// console.log(arr.slice(1, 3)); // [2, 3] (index 1 to 2)
// const removed = arr.splice(1, 3); 
// console.log(removed); // [2, 3, 4]
// console.log(arr);     // [1, 5] (original badal gaya)


const marvelHeros = ["Thor", "Spiderman", "Ironman"];
const dvhHeros = ["Batman", "Superman", "Wonderwoman"];

marvelHeros.push(...dvhHeros); // Merging two arrays using spread operator
console.log(marvelHeros); // ["Thor", "Spiderman", "Ironman", "Batman", "Superman", "Wonderwoman"]
console.log(dvhHeros); // ["Batman", "Superman", "Wonderwoman"]


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("tarun"))
console.log(Array.from("tarun"))
console.log(Array.from({name: "tarun"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
