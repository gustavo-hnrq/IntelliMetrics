import axios from "axios";

const BASE_URL = 'https://api-intelli9.calmsand-31c018e9.brazilsouth.azurecontainerapps.io';

export async function regiserMembro(data){
    try{
        const response = await axios.post(`${BASE_URL}/newUser`, data);
        console.log(response);

    }catch(error){
        console.log('Erro na requisição: ', error.message);
    }
}


