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

// ENVIAR DADOS DO CALCULO DE PAQUIMETRO POR PARTES
// MEDIÇÃO EXTERNA
export async function medicaoExterna(data) {
  const response = await axios.post(`${BASE_URL}/medicaoExterna`, data);
  return response;
}

// MEDIÇÃO INTERNA
export async function medicaoInterna(data) {
  const response = await axios.post(`${BASE_URL}/medicaoInterna`, data);
  return response;
}

// MEDIÇÃO DE RESSALTO
export async function medicaoRessalto(data) {
  const response = await axios.post(`${BASE_URL}/medicaoRessalto`, data);
  return response;
}

// MEDIÇÃO DE PROFUNDIDADE
export async function medicaoProfundidade(data) {
  const response = await axios.post(`${BASE_URL}/medicaoProfundidade`, data);
  return response;
}

// PARARELISMO
export async function medicaoPararelismo(data) {
  const response = await axios.post(`${BASE_URL}/inserirParalelismo`, data);
  return response;
}


