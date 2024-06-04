import axios from "axios";

const BASE_URL = 'https://api-intelli9.calmsand-31c018e9.brazilsouth.azurecontainerapps.io';

// ADICIONAR CLIENTE
export async function registerCategory(data) {
  try {
    const response = await axios.post(`${BASE_URL}/registerCategory`, data);
    return response;
  } catch (error) {
    return error.message;
  }
}

// TRAZER TODOS OS CLIENTE
export async function getAllCategory(){
    try{
        const response = await axios.get(`${BASE_URL}/allCategorys`);
        return response;
    }catch(error){
        return error.message;
    }
}