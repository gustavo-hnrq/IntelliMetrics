import axios from "axios";

const BASE_URL = "https://api-intelli9.calmsand-31c018e9.brazilsouth.azurecontainerapps.io";

// ADICIONAR PEÇA
export async function regiserPieces(data) {
  try {
    const response = await axios.post(`${BASE_URL}/registerPieces`, data);
    return response;
  } catch (error) {
    return error;
  }
}

// TRAZER TODAS AS PEÇAS
export async function getAllPieces() {
  try {
    const response = await axios.get(`${BASE_URL}/getAllPieces`);
    return response;
  } catch (error) {
    return error.message;
  }
}
