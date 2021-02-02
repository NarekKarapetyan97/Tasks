// a) Write your own implementation of Promise.map

const functionWithPromise = (item) => {
  return item * 2;
};

const anAsyncFunction = async (item) => {
  return functionWithPromise(item);
};

const getData = async () => {
  const list = [1, 2, 3, 4, 5];
  return Promise.all(list.map((item) => anAsyncFunction(item)));
};

getData().then((data) => {
  console.log(data);
});
