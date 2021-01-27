// 3. Write a function that calls function 'f' for each element of an array,
//    starting from the first one, and if callback receives 'true', stop calling 'f'

const f = (argument, callback) => {
  if (argument === 4) {
    callback(false);
    return;
  }
  callback(true);
};

const array = [2, 3, 4, 5, 6, 7, 8];

const doNTimes = (n, fn) => {
  while (n > 0) {
    fn();
    n--;
  }
};

function eachItem() {
  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    console.log(item);
    return item;
  }
}

function cons() {
  return eachItem();
}

setInterval(eachItem, 3000);
