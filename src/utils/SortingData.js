const sortAlphabetAZ = (arr) => {
  let input = [...arr];
  let sorted = input.sort((a, b) => {
    if (a.name.common.toLowerCase() < b.name.common.toLowerCase()) return -1;
    if (a.name.common.toLowerCase() === b.name.common.toLowerCase()) return 0;
    if (a.name.common.toLowerCase() > b.name.common.toLowerCase()) return 1;
    return 0;
  });
  return sorted;
};

export default sortAlphabetAZ;
