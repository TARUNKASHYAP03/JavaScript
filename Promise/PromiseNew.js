const promiseOne = new Promise((resolved, reject) => {
  setTimeout(() => {
    console.log("Task is done");
    resolved();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise Consumed");
});

new Promise((resolved, reject) => {
  setTimeout(() => {
    console.log("resolved check");
    resolved();
  }, 1000);
}).then(() => {
  console.log("Task 2 is done");
});

const promiseThird = new Promise((resolved, reject) => {
  setTimeout(() => {
    resolved({
      username: "Tarun",
      email: "tarun@gmail.com",
    });
  }, 1000);
});

promiseThird.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolved, reject) => {
  setTimeout(() => {
    let error = true;
    if (error) {
      resolved({ username: "kumar", email: "tk@gmail.com" });
    } else {
      reject("Error something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("all is well");
  });

const promiseFive = new Promise((resolved, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolved({ username: "Anuj", email: "ak@gmail.com", password: 123 });
    } else {
      reject("Error something went wrong");
    }
  }, 1000);
});

async function consumedFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedFive();

async function allUser() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// allUser()

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
