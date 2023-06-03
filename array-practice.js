const findMinimum = (arr) => {
  // Your code here
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
};

const runningSum = (arr) => {
  // Your code here
  let sum = 0;
  return arr.map((ele) => (sum += ele));
};

const evenNumOfChars = (arr) => {
  // Your code here
  return arr.filter((ele) => ele.length % 2 === 0).length;
};

const smallerThanCurr = (arr) => {
  // Your code here
  // let newArr = [0, 0, 0, 0, 0];
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length; j++) {
  //     if (arr[i] > arr[j]) {
  //       newArr[i]++;
  //     }
  //   }
  // }
  // return newArr;

  return arr.map((ele) => arr.filter((e) => e < ele).length);
};

const twoSum = (arr, target) => {
  // Your code here
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

const secondLargest = (arr) => {
  // Your code here
  if (arr.length < 2) return undefined;
  let max = arr[0];
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
      index = i;
    }
  }
  arr.splice(index, 1);
  let secondLargest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (secondLargest < arr[i]) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

const shuffle = (arr) => {
  // Your code here
  
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
