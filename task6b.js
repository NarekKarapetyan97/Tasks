// 6. b) Write an implementation of async.parallel function

const testFunction = (a) => {
  return new Promise((resolve) => {
    resolve(pushArray(a));
    console.log(a);
  });
};

function f() {
  console.log("hello");
}

const reqs = ["world", "jjssss0", "ls;ls"];

const pushArray = (foo) => {
  reqs.push(foo);
};

const fn = pushArray(f);

const result = reqs.reduce((prevPr, currArg) => {
  return prevPr.then((acc) =>
    testFunction(currArg).then((resp) => [...acc, resp])
  );
}, Promise.resolve([]));

result.then(console.log);
