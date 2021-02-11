// c) Call function 'giveRandAsync' 10 times, one at a time with 20 second interval, and average the results
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
      const avrg = calculateAvg(results);
      show(avrg);
    });
    const fn = () => countdown(a - 1);
    setTimeout(fn, 1000);
  };

  countdown(n);
};

calc();
//all in one time??
