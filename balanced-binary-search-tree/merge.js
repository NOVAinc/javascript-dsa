export function mergeSort(arr) {
  // console.log("Starting array: " + arr);

  if (arr.length < 2) {
    // console.log("Base case reached: returning: " + arr);

    return arr;
  } else {
    // console.log(
    //   "Splitting into the left half: " + arr.slice(0, arr.length / 2)
    // );

    let arrLeft = mergeSort(arr.slice(0, arr.length / 2));

    // console.log(
    //   "Splitting into the right half: " + arr.slice(arr.length / 2, arr.length)
    // );

    let arrRight = mergeSort(arr.slice(arr.length / 2, arr.length));

    let result = [];

    for (let i = 0, j = 0; i < arrLeft.length || j < arrRight.length; ) {
      let leftValue = arrLeft[i];
      let rightValue = arrRight[j];

      if (leftValue == undefined) {
        result = result.concat(arrRight.slice(j, arrRight.length));
        break;
      } else if (rightValue == undefined) {
        result = result.concat(arrLeft.slice(i, arrLeft.length));
        break;
      } else if (leftValue < rightValue) {
        result.push(leftValue);
        i++;
      } else {
        result.push(rightValue);
        j++;
      }
    }

    // console.log("New sorted subarray: " + result);

    return result;
  }
}
