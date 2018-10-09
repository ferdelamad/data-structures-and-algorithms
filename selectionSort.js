//first try
//loop throught the array, get the min
//when reaching the last element of the array
//swap the min with the current index of the array

var selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    let change = false;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
        change = true;
      }
      if (change && j === array.length - 1) {
        [array[i], array[min]] = [array[min], array[i]];
      }
    }
  }
  return array;
};

console.log(selectionSort([8, 2, 4, 1, 7, 9, 5]));
