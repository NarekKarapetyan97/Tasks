// 6. b) Write an implementation of async.parallel function

function parallel(arr, cb) {
  // const fns = arr.slice(1);

  const roots = () =>
    arr.map(function (num) {
      return num;
    });
  process.nextTick(setTimeout(roots, 20));

  // waterfall(fns, cb, data);
  parallel(roots, cb);
  console.log(roots);
  return roots;
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
