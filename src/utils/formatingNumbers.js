const formatingNumbers = (number) => {
  const input = number.toString().split("").reverse();
  const output = [];
  input.forEach((num, i) => {
    let position = i + 1;
    output.push(num);
    if (position % 3 === 0 && position !== input.length) output.push(".");
  });
  return output.reverse().join("");
};

export default formatingNumbers;

// const test = formatingNumbers(200000000);
// console.log(test);
