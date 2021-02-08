// 5. a) Call function 'giveRandAsync' 10 times and gather results in an array

const giveRandAsync = (callback) => {
  const f = () => callback(Math.random());
  setTimeout(f, 2000);
};

const calc = () => {
  const n = 10;
  const results = [];
  let i = null;
  while (i < n) {
    giveRandAsync((num) => {
      results.push(num);
      // if (results.length === n) {
      console.log(results);
      // }
    });

    i++;
  }
};

calc();
