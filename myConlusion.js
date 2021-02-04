// Cacllback Part

const { resolve } = require("path");

const simpleFunction = () => {
  console.log("This is simpleFunction");
};

const callbackFunction = (callback) => {
  callback();
};

callbackFunction(simpleFunction);

// Operetations part

const operetations = () => {
  const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const array2 = [21, 45, 78, 32, 65, 98, 97, 46, 31];
  const rasedPower = array1.map((x) => Math.pow(x, 2));
  const filter = rasedPower.filter((y) => y > 35);
  const concat = array2.concat(filter);
  const sort = concat.sort(function (a, b) {
    return b - a;
  });
  console.log(sort);
};

operetations();

// Promise part

function success() {
  console.log("promise resolved");
  return;
}

const showItem = (item) => {
  console.log(item);
  return;
};

const promise1 = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(success(), showItem(1));
    }, 2000);
  });
};

const promise2 = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(success(), showItem(2));
    }, 5000);
  });
};

promise1().then(promise2);

function fail() {
  console.log("promise failed");
}

const promise3 = function () {
  return new Promise((reject) => {
    setTimeout(() => {
      reject(fail(), showItem(3));
    }, 6000);
  });
};

const promise4 = function () {
  return new Promise((reject) => {
    setTimeout(() => {
      reject(fail(), showItem(4));
    }, 7000);
  });
};

Promise.all([promise3(), promise4()]);

// async/await part

const promise5 = function () {
  return new Promise(() => {
    setTimeout(() => {
      success();
      showItem(55);
    }, 8000);
  });
};

async function AsyncAwait() {
  const promise = await promise5();
  console.log(promise);
}

AsyncAwait();
