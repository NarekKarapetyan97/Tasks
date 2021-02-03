// c) Write your own implementation of Promise.each

async function promiseEach(arr, fn) {
  for (const item of arr) await fn(item);
}

async function run() {
  const array = [1, 4, 9, 16];
  let map = await promiseEach(array, console.log);
  console.log(map);
}

run();

// 1
// 4
// 9
// 16
// undefined
// why undefined ?
