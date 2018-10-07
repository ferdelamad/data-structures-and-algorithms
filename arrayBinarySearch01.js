//Write a function called linearSearch which accepts an array and a value
//and returns the index at which the value exists. If the value does not
//exits, return -1

const linearSearch = (arr, target) => {
  // add whatever parameters you deem necessary - good luck!
  //define my start, end and midpoint
  let start = 0;
  let end = arr.length - 1;
  let midpoint = Math.floor((start + end) / 2);
  //if midpoint is the target return the index(midpoint)
  if (arr[midpoint] === target) {
    return midpoint;
  }

  //while the number at midpoint is not equal to target
  while (arr[midpoint] !== target && start <= end) {
    //if the target is greater than the value at midpoint
    if (target > arr[midpoint]) {
      //start is equal to midpoint + 1
      start = midpoint + 1;
      //midpoint equal to start - end
    } else {
      //else if the target is less than the value at midpoint
      //end is equal to midpoint - 1
      end = midpoint - 1;
      //midpoint equal to start - end
    }
    midpoint = Math.floor((start + end) / 2);
  }
  return arr[midpoint] === target ? midpoint : -1;
};
