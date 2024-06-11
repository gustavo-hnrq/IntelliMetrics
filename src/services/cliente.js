import axios from "axios";

const BASE_URL =
  "https://api-intelli9.calmsand-31c018e9.brazilsouth.azurecontainerapps.io";

// ADICIONAR CLIENTE
export async function registerClient(data) {
  const response = await axios.post(`${BASE_URL}/registerClient`, data);
  return response;
}


// PEGAR TODOS OS CLIENTES
export async function getAllClient() {
  const response = await axios.get(`${BASE_URL}/getAllClients`);
  return response;
}

