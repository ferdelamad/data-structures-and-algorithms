//start looping from i to the end
//create a second loop that starts from i + 1 (end of the sorted portion)
//in a decrease way
//compare the current element and if its smaller than the last element
//of the sorted portion, insert this element there.

const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let current = i;
    for (let j = i - 1; j >= 0; j--) {
      if (array[current] < array[j]) {
        [array[current], array[j]] = [array[j], array[current]];
        current = j;
      }
    }
  }
  return array;
};

const insertionSort2 = array => {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    while (array[j] > current && array[j] >= 0) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
};

console.log(insertionSort([2, 3, 6, 1, 4, 9, 5]));
console.log(insertionSort2([2, 3, 6, 1, 4, 9, 5]));

//[2,3,6,6]  //j = 2
//[2,3,3,6]  //j = 1
//[2,2,3,6]  //j = 0

//[2, 3, 6, 1, 4, 9, 5]
//[2, 3, 1, 6, 4, 9, 5]
//sorted portion
// [2, 3, 6]
// 1
