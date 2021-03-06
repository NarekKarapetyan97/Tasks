// b) Write your own implementation of Promise.all

// From internet

Promise.all = function promiseAllReduce(values) {
  return values.reduce((accumulator, value) => {
    return accumulator.then((results) => {
      return Promise.resolve(value).then((result) => {
        return [...results, result];
      });
    });
  }, Promise.resolve([]));
};

// Not so good solution
const PromiseAll = function promiseAllIterative(values) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          results[index] = result;
          completed += 1;

          if (completed == values.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};
