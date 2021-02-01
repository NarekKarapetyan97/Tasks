// 6. Write your own implementation of async.waterfall function

const waterfallFunction = (callback, result) => {
  if (callback) {
    return (result = callback);
  } else {
    return (result = null);
  }
};

const pushFunctionsInArray = () => {
  const results = [];
  const pusher = (n) => results.push(n);
  waterfallFunction(pusher);
  results.map(waterfallFunction);
};

function waterfall(fn, done) {
  fn.length
    ? fn.shift()(function (err) {
        err ? done(err) : waterfall(fn, done);
      })
    : done();
}
//  not complete
