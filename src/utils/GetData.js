const API = "https://restcountries.eu/rest/v2/lang/es";
const APICOUNTRY = "https://restcountries.eu/rest/v2/name/";

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
