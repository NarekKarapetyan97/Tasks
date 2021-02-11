// 5. b) Call function 'giveRandAsync' 10 times, one at a time, and average the results // complete

const giveRandAsync = (callback) => {
  const f = () => callback(Math.random());
  setTimeout(f, Math.random() * 10);
};

const show = (item) => console.log(item);
const sum = (a, b) => a + b;
const calculateAvg = (numbers) => numbers.reduce(sum) / numbers.length;

const calc = () => {
  const n = 10;
  const results = [];
  const countdown = (a) => {
    if (a == 0) {
      return;
    }

    giveRandAsync((num) => {
      results.push(num);
      const number = calculateAvg(results);
      show(number);
    });
    countdown(a - 1);
  };
  countdown(n);
};

calc();
