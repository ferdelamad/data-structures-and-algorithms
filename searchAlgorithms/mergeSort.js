//Helper function to merge arrays
var mergeArrays = (arr1, arr2) => {
  const sortedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    sortedArray.push(arr2[j]);
    j++;
  }

  return sortedArray;
};

//console.log(mergeArrays([2, 3], [1, 5, 7]));

//[7,1,4,3,8,6,5,2]
//[7,1,4,3]  [8,6,5,2]
//[7,1] [4,3] [8,6] [5,2]
//[7] [1] [4] [3]   [8] [6] [5] [2]
//[1,7] [3,4]       [6,8] [2,5]
//[1, 3, 4, 7]      [2, 5, 6, 8]

const mergeSort = array => {
  if (array.length <= 1) {
    return array;
  }
  let midIndex = Math.floor(array.length - 1 / 2);
  let leftHalf = array.slice(0, midIndex);
  let rightHalf = array.slice(midIndex);
  return mergeArrays(mergeSort(leftHalf), mergeSort(rightHalf));
};

console.log(mergeSort([2, 3, 1, 5, 7]));
