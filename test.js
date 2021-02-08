const giveRandAsync = () => {
  const f = () => Math.random();
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

// giveRandAsync().then((num) => {
//   const a = results.push(num);
//   console.log(a);
// });

const results = [];

const pusher = (num) => results.push(num);

pusher().then((num) => {
  num + 1;
  console.log(num);
});

//   const pusher = (num) => results.push(num);
//   const finish = doNTimes(n, () => giveRandAsync(pusher));
//   console.log(results);
//   resolve(finish);
