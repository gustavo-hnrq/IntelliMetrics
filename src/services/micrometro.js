import axios from "axios";

const BASE_URL = "https://api-intelli9.calmsand-31c018e9.brazilsouth.azurecontainerapps.io";


export async function calcmicrometro(data) {
    const response = await axios.post(`${BASE_URL}/calculateMicrometro`, data);
    return response;
  }