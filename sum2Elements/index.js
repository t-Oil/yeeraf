const indexOfSum = (nums, sum) => {
  const countOfFind = [];
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const find = nums.findIndex((ele, i) => index !== i && ele + element === sum);

    if (find !== -1) {
      console.log(`${index},${find}`);
      break;
    }

    countOfFind.push(find);

    if (countOfFind.length === nums.length) {
      console.log("no output");
    }
  }
};

indexOfSum([2, 7, 11, 15], 9);
indexOfSum([3, 2, 4], 6);
indexOfSum([3, 1, 2, 3], 6);
indexOfSum([3, 2], 3);
indexOfSum([5, 2, 4, 7, 5], 12);
indexOfSum([2, 7, 5], 6);
indexOfSum([3, 3, 3, 3], 6);
