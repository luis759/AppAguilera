import axios from 'axios';
const api="https://fuelmatic.io"
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
export const getTanques = (): any => {
  return axios.post(`${api}/api/getAlltanques`,{}).then((response) => {
     return response;
    }).catch((dato)=>{
      return dato
    });
}