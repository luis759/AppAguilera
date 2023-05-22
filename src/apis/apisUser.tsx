import axios from 'axios';
const api="http://fuelmatic.io"
export const getLoginApi = (datoSend:{
    email:string,
    password:string
}): any => {
    return axios.post(`${api}/api/loginapp`,datoSend,{}).then((response) => {
       return response;
      }).catch((dato)=>{
        return dato
      });
}