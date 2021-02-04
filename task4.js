// 4. Write a function that calls function 'giveTrueIf4Async' for each element of an array, ,
//    starting from the first one, and if callback receives 'true',
//    one at a time stop calling 'giveTrueIf4Asyn

const giveTrueIf4Async = (arg, callback) => {
  const result = arg === 4;
  const f = () => callback(result);
  setTimeout(f, 10);
};
const array = [2, 3, 4, 5, 6, 7, 8];

const truefalse = (arg) => {
  console.log(arg);
  return arg;
};

// How to stop without return?

array.forEach((item) => {
  giveTrueIf4Async(item, truefalse);
  if (truefalse == true) {
    return false;
  }
});

// const everyElement = (arr) => {
//   arr.map((item) => {
//     giveTrueIf4Async(item, truefalse);
//   });
// };

// const truefalse = (arg) => {
//   if (arg) return;
// };

// everyElement(array);
