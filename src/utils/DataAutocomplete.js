const API = "https://restcountries.eu/rest/v2/all";

const DataAutocomplete = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    let names = [];
    data.forEach((element) => names.push(element.name));
    return names;
  } catch (error) {
    return error;
  }
};

export default DataAutocomplete;
