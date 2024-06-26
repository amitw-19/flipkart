import axios from "axios";

//const URL = "https://flipkart-backend-six.vercel.app/";

export const authenticateSignup = async (data) => {
  try {
    return await axios.post(
      `https://flipkart-backend-six.vercel.app/signup`,
      data
    );
  } catch (error) {
    console.log("Error while calling signup api", error);
  }
};

export const authenticateLogin = async (data) => {
  try {
    return await axios.post(
      `https://flipkart-backend-six.vercel.app/login`,
      data
    );
  } catch (error) {
    console.log("Error while calling login api", error);
    return error.response;
  }
};
