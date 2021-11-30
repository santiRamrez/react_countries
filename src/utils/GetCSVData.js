const GetCSVData = async (file) => {
  let resp = await fetch(file);
  let text = await resp.text();

  let table = text.split("\n").slice(2);
  // let rows = table[0].split(";");
  //Year - > rows[7]
  //Period -> rows[5]
  //Country -> rows[1]
  //Value - > rows[14]

  let filterData = table.filter((row) => {
    let eachRow = row.split(";");
    if (eachRow[5] === "Annual" && eachRow[7] === "2020") {
      if (eachRow[2] === "PPP") {
        return true;
      }
    } else {
      return false;
    }
  });

  let makeObjects = filterData.map((countryData, i) => {
    let arr = countryData.split(";");
    let output = {};
    output.country = arr[1];
    let num = Number(arr[14]);
    output.salary = Math.round(num);
    output.period = arr[7];
    return output;
  });

  let sortObjects = makeObjects.sort((objA, objB) => {
    if (objA.country.toLowerCase() < objB.country.toLowerCase()) return -1;
    if (objA.country.toLowerCase() === objB.country.toLowerCase()) return 0;
    if (objA.country.toLowerCase() > objB.country.toLowerCase()) return 1;
  });

  return sortObjects;
};

export default GetCSVData;
