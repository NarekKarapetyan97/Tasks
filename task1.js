// 1. Write a function that accepts another function as an argument and call that function passing a number

const firstFunction = (callback) => {
  callback();
};

const secondFunction = () => {
  console.log("I am a second function");
};

firstFunction(secondFunction);
