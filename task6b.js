// 6. b) Write an implementation of async.parallel function

async function parallel(arr, cb) {
  // const fns = arr.slice(1);
  // arr.push(fns);
  const f = () =>
    arr.map(function (num) {
      console.log(44);
      return num;
    });
  setTimeout(f, 20);

  // waterfall(fns, cb, data);
  parallel(f, cb).catch();
  console.log(f);
  return Promise.all([f]);
}

// foreach method for returning an array

parallel(
  [
    function (callback) {
      setTimeout(function () {
        console.log("Task One");
        callback(null, 1);
      }, 200);
    },
    function (callback) {
      setTimeout(function () {
        console.log("Task Two");
        callback(null, 2);
      }, 100);
    },
  ],
  function (err, results) {
    console.log(results);
    // the results array will equal [1, 2] even though
    // the second function had a shorter timeout.
  }
);
