// c) Write your own implementation of Promise.each

const promiseEach = (arr, fn) => {
  for (const item of arr)
    new Promise((resolve) => {
      resolve(console.log(fn(item)));
    });
};
const array = [1, 4, 9, 16];

promiseEach(array, (x) => x + 1);
