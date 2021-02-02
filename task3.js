// 3. Write a function that calls function 'f' for each element of an array,
//    starting from the first one, and if callback receives 'true', stop calling 'f'

const f = (argument, callback) => {
  if (argument === 4) {
    callback(false);
    return;
  }
  //   console.log("stopped");
  callback(true);
};

const array = [2, 3, 4, 5, 6, 7, 8];

const check = (arr) => {
  arr.map((item) => {
    f(item, truefalse);
  });
};

const truefalse = (arg) => {
  if (arg) return;
};

check(array, truefalse);

// stop part ? forEach(){breake}
