// let praveen = {
//   name: "praveen",
//   age: 10,
// };

// let amit = {
//   name: "amit",
// };

// let display = function (place, country) {
//   console.log(this);
//   console.log(
//     `${this.name} is ${this.age} years old. I'm from ${place}, ${country}`
//   );
// };

// call apply bind
// function borrowing
// display.call(amit, "delhi", "India");
// display.call(amit, "Washington", "USA");
// // display.apply(praveen, ["delhi", "India"]);
// display.apply(amit, ["delhi", "India"]);

// bind -> return new function with the obj
// getPraveenData = display.bind(praveen, "delhi", "India");
// getPraveenData();
// getPraveenData();
// getPraveenData();
// getPraveenData();

// const parentObj = {
//   name: "vasanth",
//   age: 5,
// };

// const nums = [1, 2, 3];

// nums.__proto__ = parentObj;

// console.log(Object.getPrototypeOf(nums));

// map
// let nums = [1, 2, 3, -3];
// // let doubledNums = nums.map((num) => num * 2);
// // console.log(doubledNums);

// Array.prototype.myMap = function (callback) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(callback(this[i], i, this));
//   }
//   return arr;
// };

// let doubledNums = nums.myMap((num) => num * 2);
// console.log(doubledNums);

// console.log("connected");
// const para = document.querySelector("#para");
// console.log(para);

// para.addEventListener("click", function () {
//   console.log(this);
// });

// para.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// closures - a function binds with lexical(parent) env forms closure

// function parentFn() {
//   let age = 10;
//   let num = 5;
//   // console.log(num);

//   return function child() {
//     let num = 20;
//     console.log("return fn", num, age);
//   };
// }

// const childFn = parentFn();

// childFn();

// abstract

// function parentFn() {
//   let count = 1;
//   return function getName() {
//     if (count % 3 === 0) {
//       console.log("printing name");
//     }
//     count += 1;
//   };
// }

// const getName = parentFn();

// getName();
// getName();
// getName();
// getName();
// getName();
// getName();

// reduce
// const nums = [1, 2, [3, [4, 6, [8, [9, 10]]]], 5];
// // [1, 2, 3, 4, 5]
// console.log([...nums]);

// let nums = [1, 2, 3, 4, 5];
// let sum = nums.reduce((acc, curr) => curr ** acc);
// console.log(sum);

// Array.prototype.myReduce = function (callback, initialValue) {
//   //   console.log(this);
//   let acc = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     if (acc !== undefined) {
//       acc = callback(acc, this[i]);
//     } else {
//       acc = this[i];
//     }
//   }

//   return acc;
// };

// let nums = [1, 2, 3, 4, 5];
// let sum = nums.myReduce((acc, num) => acc * num);
// console.log(sum);

// scoping

// var -> function
// let and const -> block

// function display() {
//   var num = 5;
//   function demo() {
//     console.log(num);
//   }
//   demo();
// }

// display();

// reduce
// HOF - higher order function
// hof -> a fn which takes fn as an argument or returns function or it can do both
// map, filter, reduce, sort, every, some, ....

// const nums = [1, 2, 3, 4, 5];

// function reducer(acc, curr) {
//   console.log(`acc --> ${acc}, curr --> ${curr}`);
//   return acc + curr;
// }

// // acc will take first value of array if initial value is not provided
// // const sum = nums.reduce(reducer, 100); // acc - 100
// const sum = nums.reduce(reducer, 100); // acc - 1
// console.log(sum);

// prototype

// const players = {
//   name: "virat",
//   country: "india",
// };

// const nums = [1, 2, 3];

// // nums.__proto__ = players;
// // nums.length = 0;
// // console.log(nums, nums.length);

// nums["vasanth"] = 10;

// for (let key in nums) {
//   console.log(key, nums[key]);
// }

// polyfill
// let nums = [1, 2, 3, 4];
// let sqNums = nums.map(function (num, index, arr) {
//   console.log(`num -> ${num}, index -> ${index}, arr -> ${arr}`);
//   return num ** 2;
// });
// console.log(sqNums);

// Array.prototype.myMap = function (callback) {
//   let newArr = [];
//   for (let i = 0; i < this.length - 1; i++) {
//     newArr.push(callback(this[i], i, this));
//   }
//   return newArr;
// };

// const sqNums = nums.myMap((num) => num ** 2);
// console.log(sqNums);

// filter
// let nums = [1, 2, 3, 4];
// // let filteredNums = nums.filter((num) => num > 2);
// // console.log(filteredNums);

// Array.prototype.myfilter = function (callback) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// };

// let filteredNums = nums.myfilter((num) => num > 2);
// console.log(filteredNums);

// const nums = [1, 2, 3, 4, 5];

// function reducer(acc, curr) {
//   console.log(`acc --> ${acc}, curr --> ${curr}`);
//   return acc + curr;
// }

// // acc will take first value of array if initial value is not provided
// const sum = nums.reduce(reducer, 100); // acc - 100
// const sum = nums.reduce(reducer); // acc - 1
// console.log(sum);

// Array.prototype.myReduce = function (reducer, initialValue) {
//   let acc = initialValue;
//   console.log("acc", acc);
//   for (let i = 0; i < this.length; i++) {
//     if (acc !== undefined) {
//       acc = reducer(acc, this[i]);
//     } else {
//       acc = this[i];
//     }
//   }
// };

// console.log(nums.myReduce(reducer, 100));

// PROMISES
// HOF
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("rejected");
//     resolve("success");
//   }, 3000);
// });

// p.catch((err) => console.log("err", err)).then((result) => console.log(result));

// GITHUB actions
// Get user -> Get repositories -> Get commits

function getUser(id) {
  console.log(`Getting username of user id ${id}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sandeep");
    }, 2000);
  });
}

function getRepositories(username) {
  console.log(`Getting repos of user ${username}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let repos = ["calculator", "Graph project", "dashboard"];
      resolve(repos);
    }, 2000);
  });
}

function getCommits(repo) {
  console.log(`Getting commits of user ${repo}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let commits = ["initial commit", "first commit"];
      resolve(commits);
    }, 2000);
  });
}

// getUser(10)
//   .then((username) => {
//     console.log(username);
//     getRepositories(username)
//       .then((repos) => {
//         console.log(repos);
//         getCommits(repos[0])
//           .then((commits) => console.log(commits))
//           .catch((err) => console.log(err));
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));

// chain of promises
// getUser(10)
//   .then((username) => {
//     console.log(username);
//     return getRepositories(username);
//   })
//   .then((repos) => {
//     console.log(repos);
//     return getCommits(repos[0]);
//   })
//   .then((commits) => {
//     console.log(commits);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   })
//   .finally((msg) => {
//     console.log("promise is closed", msg);
//   });

// SYNTACTIC SUGAR OF PROMISE -> ASYNC AWAIT
async function doGithubAction() {
  const username = await getUser(10);
  console.log("username", username);
  const repos = await getRepositories(username);
  console.log("repos", repos);
  const commits = await getCommits(repos[0]);
  console.log("commits", commits);
}

// doGithubAction();

// const p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("success 1");
//   }, 2000);
// });

// const p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("success 2");
//   }, 1000);
// });

// // both are resolved
// Promise.all([p1, p2]).then((result) => {
//   console.log(result);
// });

// Promise.race([p1, p2]).then((result) => console.log(result));

// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: 'GET',
//   headers:
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// falsy
// false, 0, undefined, null, ''

// console.log(console.log("vasanth"));

// short circuiting
if (10 > 5 || console.log("vasanth")) {
  console.log("success");
} else {
  console.log("failed");
}
