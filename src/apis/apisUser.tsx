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
export const getAlltanques = (token:any,typetoken:any): any => {
  const config = {
    headers: { 
      Authorization: `${typetoken} ${token}`,
    Accept :'application/json', 
  }
  }
  return axios.get(`${api}/api/allTanques`,config).then((response) => {
     return response;
    }).catch((dato)=>{
      return dato
    });
}
export const getallSitios = (token:any,typetoken:any): any => {
  const config = {
    headers: { 
      Authorization: `${typetoken} ${token}`,
    Accept :'application/json', 
  }
  }
  return axios.get(`${api}/api/allSitios`,config).then((response) => {
     return response;
    }).catch((dato)=>{
      return dato
    });
}
export const getTransaccionFechaTanque = (token:any,typetoken:any,fecha:any,id:any): any => {
  const config = {
    headers: { 
      Authorization: `${typetoken} ${token}`,
    Accept :'application/json', 
  }
  }
  return axios.get(`${api}/api/getTransaccionTanque/${id}/${fecha}`,config).then((response) => {
     return response;
    }).catch((dato)=>{
      return dato
    });
}
export const getNotificaciones = (token:any,typetoken:any): any => {
  const config = {
    headers: { 
      Authorization: `${typetoken} ${token}`,
    Accept :'application/json', 
  }
  }
  return axios.get(`${api}/api/getAll10Last`,config).then((response) => {
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