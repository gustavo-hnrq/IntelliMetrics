import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL =
  "https://api-intelli9.calmsand-31c018e9.brazilsouth.azurecontainerapps.io";

export async function regiserMembro(data) {
  const response = await axios.post(`${BASE_URL}/newUser`, data, {
    headers: { Authorization: `${Cookies.get("token")}` },
  });
  return response;
}
<<<<<<< HEAD
=======



export async function getAllUsers(){
    try{
        const response = await axios.get(`${BASE_URL}/allUsers`);
        return response;
    }catch(error){
        return error.message;
    }
}
>>>>>>> e9726fb434048eb80fbd91ab257e4eafd0091f08
