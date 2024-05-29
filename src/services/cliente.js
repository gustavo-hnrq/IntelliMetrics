import axios from "axios";

const BASE_URL = 'https://api-intelli9.calmsand-31c018e9.brazilsouth.azurecontainerapps.io';

// ADICIONAR CLIENTE
export async function registerClient(data) {
  try {
    const response = await axios.post(`${BASE_URL}/registerClient`, data);
    return response;
  } catch (error) {
    return error.message;
  }
}

// TRAZER TODOS OS CLIENTE
export async function getAllClient(){
    try{
        const response = await axios.get(`${BASE_URL}/getAllClients`);
        return response;
    }catch(error){
        return error.message;
    }
}