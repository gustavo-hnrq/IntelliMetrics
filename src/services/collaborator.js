import axios from "axios";

const BASE_URL = "https://api-intelli4.calmsand-31c018e9.brazilsouth.azurecontainerapps.io";

export async function Signin(data) {
  try {
    const response = await axios.put(`${BASE_URL}/user/login`, data);
    return (response.data)

  } catch (error) {
    console.log(error);
  }
}
