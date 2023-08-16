/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(arr, w) {


    let n = arr.length,
    res = [];
    const deque = [];

    for (let i = 0; i < w; i++) {
    while (deque.length > 0 && arr[i] >= arr[deque[deque.length - 1]]) {
      deque.pop();
    }
    deque.push(i);
  }
  for (let i = w; i < n; i++) {
    res.push(arr[deque[0]]);

    while (deque.length > 0 && arr[i] >= arr[deque[deque.length - 1]]) {
      deque.pop();
    }

    while (deque.length > 0 && i - w >= deque[0]) {
      deque.shift();
    }
    deque.push(i);
  }
  res.push(arr[deque[0]]);
  return res;
    
};
