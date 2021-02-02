// 6. Write an implementation of async.waterfall function

function waterfall(arr, cb, result) {
  var fns = arr.slice(1);
  if (!arr[0]) {
    process.nextTick(function () {
      cb(null, result);
    });
    return;
  }
  var first = arr[0];
  first(function (err, data) {
    if (err) return cb(err);

    waterfall(fns, cb, data);
  });
}
waterfall(
  [
    function (cb) {
      console.log(1);
      setTimeout(cb, 1000);
    },
    function (cb) {
      console.log(2);
      setTimeout(cb, 1000);
    },
    function (cb) {
      console.log(3);
      setTimeout(cb, 1000);
    },
    function (cb) {
      console.log(4);
      setTimeout(cb, 1000);
    },
  ],
  function () {
    console.log("Done");
  }
);
