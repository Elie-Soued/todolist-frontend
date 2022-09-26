import axios from "axios";

// URL for Deployment

// const URL = "https://todoapi.pilexlaflex.com/todos";
//const URLRegister = "https://todoapi.pilexlaflex.com/users";
//const URLLogin = "https://todoapi.pilexlaflex.com/users/login";

// URL for Development

const URL = "http://localhost:3000/todos";
const URLRegister = "http://localhost:3000/users";
const URLLogin = "http://localhost:3000/users/login";

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

export { doRequest, URL, URLRegister, URLLogin };
