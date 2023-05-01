import axios from 'axios';
export const getLoginApi = (datoSend:{
    email:string,
    password:string
}): any => {
    return axios.post("http://192.168.100.5/aguilera/aguilerafuel/public/api/loginapp",datoSend,{}).then((response) => {
       return response;
      }).catch((dato)=>{
        return dato
      });
}