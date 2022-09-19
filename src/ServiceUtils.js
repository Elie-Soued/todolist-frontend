import axios from "axios";

// URL for Deployment

const URL = "https://todoapi.pilexlaflex.com/todos";

// URL for Development

//const URL = "http://localhost:3000/todos";

const doRequest = async (httpVerb, url, payload) => {
  axios.defaults.headers.post["Content-Type"] =
    "application/json;charset=utf-8";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
  try {
    const response = await axios[httpVerb](url, payload);
    return response;
  } catch (error) {
    console.log(error, "DB might be out of sync");
  }
};

export { doRequest, URL };
