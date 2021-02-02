// c) Write your own implementation of Promise.each

async function promiseEach(arr, fn) {
  for (const item of arr) await fn(item);
}

async function run() {
  const array1 = [1, 4, 9, 16];
  let map1 = await promiseEach(array1, console.log);
  console.log(map1);
}

run();

// why undefined ?
// 1
// 4
// 9
// 16
// undefined
