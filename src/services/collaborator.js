import axios from "axios";

const BASE_URL =
  "https://api-intelli9.calmsand-31c018e9.brazilsouth.azurecontainerapps.io";

// LOGIN
export async function Signin(data) {
  const response = await axios.put(`${BASE_URL}/user/login`, data);
  return response.data;
}

// REDEFINIR SENHA
export async function refineePassword(data) {
  delete data.confirmPassword;
  const response = await axios.put(`${BASE_URL}/updatePass`, data);
  return response.data;
}
