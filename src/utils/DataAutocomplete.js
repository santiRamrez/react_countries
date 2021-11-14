const API = "https://restcountries.com/v3.1/region/ame";

const DataAutocomplete = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    let names = [];
    data.forEach((element) => names.push(element.name.common));
    return names;
  } catch (error) {
    return error;
  }
};

export default DataAutocomplete;
