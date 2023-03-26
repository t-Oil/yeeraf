const modThreeFive = (start, end) => {
  for (let index = start; index <= end; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("threefive");
    } else if (index % 3 === 0) {
      console.log("three");
    } else if (index % 5 === 0) {
      console.log("five");
    } else {
      console.log(index);
    }
  }
}

modThreeFive(1,100)
