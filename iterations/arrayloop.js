// const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let odd=[];
// let even=[];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (arr[i] % 2 === 0) {
//         even.push(element);
//     }
//     else {
//         odd.push(element);
//     }
// }

// console.log("Even numbers: ", even);
// console.log("Odd numbers: ", odd);

// Maps

const myMap = new Map();
myMap.set("name", "Tarun");
myMap.set("age", 22);
myMap.set("isLoggedIn", true);

// console.log(myMap);

// for (const [key, value] of myMap) {
//     console.log(`${key}: ${value}`);
// }

const myObject = {
    name: "Tarun",
    age: 22,
    isLoggedIn: true
};

// for (const key in myObject) {
//     if (Object.hasOwnProperty.call(myObject, key)) {
//         const value = myObject[key];
//         console.log(`${key}: ${value}`);
//     }
// }

const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// programmingLanguages.forEach((language, index) => {
//     console.log(`${index + 1}. ${language}`);
// });

// function printLanguages(languages) {
//     console.log(languages)
// }

// programmingLanguages.forEach(printLanguages);

const myCoding=[
    {
        name:"Tarun",
        language:"JavaScript",
    }
    ,
    {
        name:"John",
        language:"Python",
    },
    {
        name:"Jane",
        language:"Java",
    }
]

myCoding.forEach((coder) => {
    console.log(`${coder.name} codes in ${coder.language}`);
});