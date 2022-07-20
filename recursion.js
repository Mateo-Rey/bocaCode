function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
console.log(multiply([2,5,7], 3))

function sum(arr, n) {
    if (n <=0) {
        return 0;
    } else {
        return sum(arr,n-1) + arr[n -1]
    }
}
console.log(sum([22,8,12],3));
