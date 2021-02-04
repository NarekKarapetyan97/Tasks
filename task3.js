// 3. Write a function that calls function 'f' for each element of an array,
//    starting from the first one, and if callback receives 'true', stop calling 'f'

const f = (argument, callback) => {
  if (argument === 4) {
    callback(false);
    return;
  }
  callback(true);
};

const array = [2, 3, 4, 5, 6, 7, 8];

const truefalse = (arg) => {
  return arg;
};

// How to stop without return?

array.forEach((item) => {
  f(item, truefalse);
  if (truefalse == true) {
    return false;
  }
});

// const check = (arr) => {
//   arr.map((item) => {
//     f(item, truefalse);
//   });
// };

// check(array, truefalse);

// stop part ? forEach()
