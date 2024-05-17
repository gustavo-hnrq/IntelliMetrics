import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api-intelli4.calmsand-31c018e9.brazilsouth.azurecontainerapps.io/',
});

export default axiosInstance;
