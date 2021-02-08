// d) Call function 'giveRandAsync' 10 times, all at once, and average the results

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
  doNTimes(n, () => resolve(giveRandAsync(pusher)));
  const fn = () => console.log(calculateAvg(results));
  setTimeout(fn, 10);
});

Promise.all([giveRandAsync, resultPromise]);
