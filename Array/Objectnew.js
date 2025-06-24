const instaUser = {};

instaUser.name = "Tarun Kumar";
instaUser.age = 20;
instaUser.isLoggedIn = true;

// console.log(instaUser);

const instaUser2 = {
  name: {
    firstName: "Tarun",
    lastName: "Kumar",
  },
  age: 20,
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
  email: "tarun@gmail.com",
};

// console.log(instaUser2.name);

const instaUser3 = {
  1: "Tarun",
  2: "Kumar",
  3: "Kashyap",
  4: "Singh",
};

const instaUser4 = {
  5: "himanshu",
  6: "kumar",
  7: "kashyap",
  8: "singh",
};

const obje = Object.assign({}, instaUser3, instaUser4);
console.log(obje);

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "tarun",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); data types is array
// console.log(Object.values(tinderUser)); // data types is array
// console.log(Object.entries(tinderUser)); // data types is array of arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "tarun"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "tarun",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]