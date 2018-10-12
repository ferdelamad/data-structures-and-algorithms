//Helper function to swap values
const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

//Sort the Pivot helper function
const pivot = (arr, start = 0, end = arr.length) => {
  let pivotVal = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivotVal) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};

const quickSort = (arr, start = 0, end = arr.length) => {
  console.log(start, end);
  console.log(arr);
  if (start < end) {
    let pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }
  return arr;
};

console.log(quickSort([5, 4, 6, 1, 7, 3, 2, 10, 8, 9]));
