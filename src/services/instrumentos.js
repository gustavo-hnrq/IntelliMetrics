import axios from "axios";

const BASE_URL = "https://api-intelli9.calmsand-31c018e9.brazilsouth.azurecontainerapps.io";

// ADICIONAR PEÇA
export async function regiserTools(data) {
  try {
    const response = await axios.post(`${BASE_URL}/registerTools`, data);
    return response;
  } catch (error) {
    console.log(data);
    return error;
  }
}

export async function getAllTools() {
  try {
    const response = await axios.get(`${BASE_URL}/getAllTools`);
    return response;
  } catch (error) {
    
    return error.message;
  }
}
