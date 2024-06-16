import axios from "axios";

const BASE_URL =
  "https://api-intelli9.calmsand-31c018e9.brazilsouth.azurecontainerapps.io";

// ENVIA OS DADOS DE CALCULO DE PAQUIMETRO
export async function resultadoCalcPaq(data) {
  const response = await axios.post(`${BASE_URL}/calculosPaq`, data);
  return response;
}

export async function incertezaCalcPaq(data) {
  const response = await axios.post(`${BASE_URL}/incertezaPaq`, data);
  return response;
}




