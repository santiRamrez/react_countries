const FormatCurrency = (obj) => {
  let [arr] = Object.keys(obj);
  let short = arr;
  let name = obj[short].name;
  return [short, name];
};

export default FormatCurrency;
