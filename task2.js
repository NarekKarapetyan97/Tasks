//2. Write a function that calls function 'giveRand' 10 times and averages the results.

const n = 10;

const giveRand = (callback) => callback(Math.random());

const sum = (a, b) => a + b;

const doNTimes = (n, fn) => {
  while (n > 0) {
    fn();
    n--;
  }
};

const calculateAvg = (numbers) => numbers.reduce(sum) / numbers.length;

const tenTimesGenerateRndNum = () => {
  const results = [];
  const pusher = (n) => results.push(n);
  doNTimes(n, () => giveRand(pusher));
  console.log(calculateAvg(results));
};

tenTimesGenerateRndNum();
