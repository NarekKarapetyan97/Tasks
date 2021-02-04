// 6. a) Write an implementation of async.waterfall function

function helperForWaterfall(arr, callback, result) {
  const fns = arr.slice(1);
  if (!arr[0]) {
    callback(...result);
    return;
  }
  const first = arr[0];
  first(...result, (err, ...data) => {
    if (err) {
      return callback(err);
    }
    helperForWaterfall(fns, callback, data);
  });
}

function parallel(arr, callback) {
  helperForWaterfall(arr, callback, []);
}

///////////////////////////////////// ex.
parallel(
  [
    function (doneCallback) {
      setTimeout(function () {
        console.log("FIRST");
        doneCallback(null, "b");
      }, 100);
    },
    function (param, doneCallback) {
      setTimeout(function () {
        console.log("SECOND", param);
        doneCallback(null, "c", "d");
      }, 50);
    },
    function (param1, param2, doneCallback) {
      setTimeout(function () {
        console.log("THIRD", param1, param2);
        doneCallback(null, "e");
      }, 10);
    },
  ],
  function (err, result) {
    console.log("err", err);
    console.log("result", result);
  }
);

// from internet
// function waterfall(arr, cb, result) {
//   const fns = arr.slice(1);
//   if (!arr[0]) {
//     cb(null, result);
//     return;
//   }
//   const first = arr[0];
//   first(function (err, data) {
//     if (err) return cb(err);

//     waterfall(fns, cb, data);
//   });
// }
