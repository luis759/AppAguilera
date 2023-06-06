import axios from 'axios';
const api="https://fuelmatic.io"
const apidev="http://localhost/aguilera/aguilerafuel/public"

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
export const getTanques = (token:any,typetoken:any): any => {
  const config = {
    headers: { 
      Authorization: `${typetoken} ${token}`,
    Accept :'application/json', 
  }
  }
  return axios.get(`${api}/api/tanqueInfo`,config).then((response) => {
     return response;
    }).catch((dato)=>{
      return dato
    });
}
export const getImageStart = (): any => {
  return axios.get(`${api}/api/infoImage`,{}).then((response) => {
     return response;
    }).catch((dato)=>{
      return dato
    });
}