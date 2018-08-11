function runningTotal(array) {
  var newArray = [];
  var i;
  var sum = 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
    newArray.push(sum);
  }
  console.log(newArray);
}
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

