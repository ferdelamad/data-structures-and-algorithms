//Nested loops solution > Time complexity: O(n2)
const nestedBubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
};

//Recursive solution > Time complexity: O(n) ?
const recursiveBubbleSort = array => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[array.length - 1] && array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
      counter++;
    }
  }

  if (counter > 0) {
    recursiveBubbleSort(array);
  }
  return array;
};

console.log(nestedBubbleSort([5, 1, 8, 3, 32, 12, 4, 7]));
console.log(recursiveBubbleSort([5, 1, 8, 3, 32, 12, 4, 7]));
