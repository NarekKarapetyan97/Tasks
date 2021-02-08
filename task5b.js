// 5. b) Call function 'giveRandAsync' 10 times, one at a time, and average the results

const giveRandAsync = (callback) => {
  const f = () => callback(Math.random());
  setTimeout(f, Math.random() * 10);
};

const sum = (a, b) => a + b;
const calculateAvg = (numbers) => numbers.reduce(sum) / numbers.length;

const calc = () => {
  const n = 10;
  const results = [];
  let i = null;
  while (i < n) {
    giveRandAsync((num) => {
      results.push(num);
      const number = calculateAvg(results);
      console.log(number);
    });
    i++;
  }
};

calc();
