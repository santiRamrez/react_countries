const API = "https://restcountries.com/v3.1/region/ame";
const APICOUNTRY = "https://restcountries.com/v3.1/region/ame";

const getData = async (id) => {
  let apiURl = id ? APICOUNTRY + id : API;

  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    //data is an array and have objects in.
    return data;
  } catch (error) {
    console.log("fetch error ", error);
  }
};

export default getData;
