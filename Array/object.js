// Object Litteral

const myObject = {
    name:'tarun',
    age: 20,
    isLoggedIn: false,
    location:"India",
    email:"tarun@gmail.com",
    lastloginDay:["Monday", "Tuesday", "Wednesday"],
}

Object.freeze(myObject); // Prevents any changes to the object
console.log(myObject);

console.log(myObject.lastloginDay);
console.log(myObject.location); // Accessing the first element of the array

myObject.email = "kashyap@gmail.com"
console.log(myObject.email);

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "tarun",
    "full name": "tarun Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "tarun@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "tarun@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "tarun@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());