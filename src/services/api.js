import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5', 
})

{/*api.interceptors.request.use(config => {
    config.params = {
        q: 'London',
        appid: 'ba6d400600da3da64a7f04693de0c28f',
     // spread the request's params
      ...config.params,
    };
    return config;
  });*/}
  
export default api;