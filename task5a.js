// 5. a) Call function 'giveRandAsync' 10 times and gather results in an array

const giveRandAsync = (callback) => {
  const f = () => callback(Math.random());
  return new Promise((resolve) => {
    resolve(setTimeout(f, 10));
  });
};

const n = 10;

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
  const fn = () => console.log(results);
  setTimeout(fn, 10);
});

Promise.all([giveRandAsync, resultPromise]);
