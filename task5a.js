// 5. a) Call function 'giveRandAsync' 10 times and gather results in an array //complete

const giveRandAsync = (callback) => {
  const f = () => callback(Math.random());
  setTimeout(f, Math.random() * 10);
};

const calc = () => {
  const n = 10;

  const results = [];

  const countdown = (a) => {
    if (a == 0) {
      console.log(results);
      return;
    }

    giveRandAsync((num) => {
      results.push(num);
      countdown(a - 1);
    });
  };

  countdown(n);
};

calc();
