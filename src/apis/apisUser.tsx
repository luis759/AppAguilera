import axios from 'axios';
const api="https://fuelmatic.io"
const apidev="http://localhost/aguilera/aguilerafuel/public"

export const getLoginApi = (datoSend:{
    email:string,
    password:string,
    tokenUserAPP:any
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
export const getAllClientes = (token:any,typetoken:any): any => {
  const config = {
    headers: { 
      Authorization: `${typetoken} ${token}`,
    Accept :'application/json', 
  }
  }
  return axios.get(`${api}/api/allClientes`,config).then((response) => {
     return response;
    }).catch((dato)=>{
      return dato
    });
}
export const getAllVehiculos = (token:any,typetoken:any): any => {
  const config = {
    headers: { 
      Authorization: `${typetoken} ${token}`,
    Accept :'application/json', 
  }
  }
  return axios.get(`${api}/api/allVehiculos`,config).then((response) => {
     return response;
    }).catch((dato)=>{
      return dato
    });
}
export const getAllBombas = (token:any,typetoken:any): any => {
  const config = {
    headers: { 
      Authorization: `${typetoken} ${token}`,
    Accept :'application/json', 
  }
  }
  return axios.get(`${api}/api/allBombas`,config).then((response) => {
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
export const postLoginDespachador = (token:any,typetoken:any,datos:{
  telefono:string,
  pin:string
}): any => {
  const config = {
    headers: { 
      Authorization: `${typetoken} ${token}`,
    Accept :'application/json', 
  }
  }
  return axios.post(`${api}/api/loginDespachador`,datos,config).then((response) => {
     return response;
    }).catch((dato)=>{
      return dato
    });
}
export const postadjudicarCombustible = (token:any,typetoken:any,datos:{
  Fecha:string,
  Hora:string,
  Cantidad:string,
  Despachador_id:string,
  Cliente_id:string,
  Vehiculo_id:string,
  Bomba_id:string
}): any => {
  const config = {
    headers: { 
      Authorization: `${typetoken} ${token}`,
    Accept :'application/json', 
  }
  }
  return axios.post(`${api}/api/adjudicarCombustible`,datos,config).then((response) => {
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