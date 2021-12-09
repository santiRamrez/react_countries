const API = "https://restcountries.com/v3.1/";
// const API = "https://restcountries.com/v3.1/region/europe";

const getData = async (id) => {
  let apiURl = id ? `${API}name/{${id}}` : `${API}all`;

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
