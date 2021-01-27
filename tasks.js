//Write a function that calls function 'giveRand' 10 times and averages the results.

// const giveRand = (callback) => {
//   callback(Math.random());
// }
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// const randomNumber = giveRand()
// const arr = []
// const sum = arr.reduce(generate10RndNumbers())

// function generate10RndNumbers (){
// while(arr.length < 10){
// arr.push(randomNumber)
// }
// return arr;
// }

// function average(){
// arr.reduce()
// }

/////////////////////////////

// Write a function that calls function 'f' for each element of an array, starting from the first one, and if callback receives 'true', stop calling 'f'

// const f = (argument, callback) => {
//   if (argument === 4) {
//     callback(false);
//     return;
//   }
//   callback(true);
// };

// const array = [2, 3, 4, 5, 6, 7, 8];

// function stopCalling() {
//   for (let i = 0; i <= array.length; i++) {
//     console.log(array[i]);
//     let _callback = (reject) => {
//       console.log({ reject });
//       if (reject) {
//       }
//     };

//     f(array[i], _callback);
//   }
// }
// stopCalling();
