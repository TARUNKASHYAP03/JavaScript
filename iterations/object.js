const myObject = {
    name: 'tarun',
    age: 20,
    isLoggedIn: false,
    location: "India",
    email: "tarun@gmail.com",
};

// Object.freeze(myObject); // Prevents any changes to the object
// console.log(myObject);

// for (const key in myObject) {
//     console.log(`${key}: ${value}`);
//     // if (Object.hasOwnProperty.call(myObject, key)) {
//     //     const value = myObject[key];
        
//     // }
// }

const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];

for (const language of programmingLanguages) {
    console.log(language);
}