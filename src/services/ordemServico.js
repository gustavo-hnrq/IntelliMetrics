import axios from "axios";

const BASE_URL = "https://api-intelli9.calmsand-31c018e9.brazilsouth.azurecontainerapps.io";

export async function getAllOrders(){
    try{
        const response = await axios.get(`${BASE_URL}/getAllOrders`);
        return response;
    }catch(error){
        return error;
    }
}

export async function regiserOrders(data) {
    try {
      const response = await axios.post(`${BASE_URL}/registerOrders`, data);
      return response;
    } catch (error) {
      console.log(data);
      return error;
      
    }
  }