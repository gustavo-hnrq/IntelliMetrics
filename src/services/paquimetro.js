import axios from "axios";

const BASE_URL =
  "https://api-intelli9.calmsand-31c018e9.brazilsouth.azurecontainerapps.io";

// ENVIA OS DADOS DE CALCULO DE PAQUIMETRO
export async function registerCalcPaq(data) {
  const response = await axios.post(`${BASE_URL}/calculosPaq`, data);
  return response;
}




