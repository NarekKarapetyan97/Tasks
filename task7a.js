// a) Write your own implementation of Promise.map

// just for test
const functionWithPromise = (item) => {
  return item * 2;
};

const getData = async () => {
  const list = [1, 2, 3, 4, 5];
  return Promise.all(list.map((item) => functionWithPromise(item)));
};

getData().then((data) => {
  console.log(data);
});
