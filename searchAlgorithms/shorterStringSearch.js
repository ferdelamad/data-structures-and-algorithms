function shortStringSearch(long, short) {
  let counter = 0;
  for (let i = 0; i < long.length; i++) {
    console.log(counter);
    if (counter === short.length) {
      return true;
    }
    for (let j = 0; j < short.length; j++) {
      if (long[i] === short[j]) {
        counter++;
        break;
      } else if (short[j] === short[short.length - 1]) {
        console.log("to cero");
        counter = 0;
      }
    }
  }
  return false;
}

console.log(shortStringSearch("lorie loled", "lol"));
