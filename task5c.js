// c) Call function 'giveRandAsync' 10 times, one at a time with 20 second interval, and average the results
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
  while (i < 10) {
    const f = () =>
      giveRandAsync((num) => {
        results.push(num);

        const number = calculateAvg(results);
        console.log(number);
      });
    setInterval(f, 5000);
    i++;
  }
};

calc();
