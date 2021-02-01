// c) Call function 'giveRandAsync' 10 times, one at a time with 20 second interval, and average the results// Call function 'giveRandAsync' 10 times, one at a time, and average the results
const giveRandAsync = (callback) => {
  const f = () => callback(Math.random());
  return new Promise((resolve) => {
    resolve(setTimeout(f, 10));
  });
};

const n = 10;

const sum = (a, b) => a + b;
const calculateAvg = (numbers) => numbers.reduce(sum) / numbers.length;

const doNTimes = (a, fn) => {
  while (a > 0) {
    fn();
    a--;
  }
};

const resultPromise = new Promise((resolve) => {
  const results = [];
  const pusher = (num) => results.push(num);
  resolve(doNTimes(n, () => giveRandAsync(pusher)));
  const fn = () => console.log(calculateAvg(results));
  setTimeout(fn, 20000);
});

resultPromise;