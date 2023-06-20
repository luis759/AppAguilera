import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import "./Tanqueinfo.css";
import { arrowDownCircleOutline, arrowUpCircleOutline } from "ionicons/icons";
import { useStorage } from "../../hook/database/useStorage";
import { useParams } from "react-router";
import { STORAGEKEY } from "../../hook/database/interfaces";
import { getNotificaciones, getTransaccionFechaTanque } from "../../apis/apisUser";

const Tanqueinfo: React.FC<any> = () => {
  const [dataNotificaciones,setNotifiaciones]=useState([] as any)
  const [token,setToken]=useState({} as any)
  const [fecha,setFecha]=useState("")
  const [paramtanques,setParamTanques]=useState({} as any)
  const params=useParams()
  const {getValuesKey,addValuesKey,deleteAllKey,updateValuesKey,deleteValuesKey,storage}= useStorage()
  useEffect(()=>{
    if(storage){
      const mostrarValores= async ()=>{
        const valores= await getValuesKey(STORAGEKEY.token)
        if(valores){
          setParamTanques(params)
          setFecha(new Date().getFullYear()+"-"+new Date().getMonth()+1+"-"+new Date().getDate())
        getInfosValores(valores[0],new Date().getFullYear()+"-"+new Date().getMonth()+1+"-"+new Date().getDate(),params)
        setToken(valores[0])
        }
      }
      mostrarValores()
    }
  },[storage])
 const getInfosValores= async (valores:any,valorFecha:string,params:any)=>{
  const valoreTransaccionTanques = await getTransaccionFechaTanque(valores.token,valores.typetoken,valorFecha,params.id)
  setNotifiaciones(valoreTransaccionTanques.data.map((dato:any)=>{
    return({
      nombre:dato.nombre,
      litros:dato.cantidad,
      fecha:dato.fecha,
      hora:dato.hora,
      tipo:dato.tipoPro,
      datodescarga:Number(dato.cantidad)>0?"Carga":"Descarga",
      color:Number(dato.cantidad)>0?"success":"danger",
    })
  }))
 }
  const dateChanged= (evento:any)=>{
    setFecha(evento.split("T")[0])
  }
  const buscar= async ()=>{
    if(fecha){
      getInfosValores(token,fecha,paramtanques)
    }
  }
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="notifications-toolbar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="tanques"></IonBackButton>
          </IonButtons>
          <IonTitle className="ion-text-center">Tanque Transacciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="notifications ion-padding">
        <div className="section animate__animated animate__fadeInUp">
                
          <IonDatetime id="datetime" presentation="date" 
                onIonChange={(e) => dateChanged(e.detail.value)}
                onChange={dateChanged}></IonDatetime>
          <IonButton onClick={ buscar}
>Buscar</IonButton>
          <div className="section-title">
            <h4>Ultimas 5 transacciones</h4>
          </div>
          <div className="the-list">
            {dataNotificaciones.map((dato:any)=>{
              return(<>
                <IonItem lines="none">
                <IonAvatar slot="start">
      <IonIcon icon={dato.color==="danger"?arrowDownCircleOutline:arrowUpCircleOutline} color={dato.color} size="large"></IonIcon>
              </IonAvatar>
                    <IonLabel>
                      <h4>{dato.datodescarga}</h4>
                      <p>fecha: {dato.fecha}</p>
                      <p>hora: {dato.hora}</p>
                    </IonLabel>
                    
                    <div className="end-slot" slot="end">
                      <h5 color={dato.color}>{dato.litros}</h5>
                    <IonLabel>
                      <p> {dato.tipo} </p>
                    </IonLabel>
                    </div>
                  
                  </IonItem>
              </>)
            })}
        
          </div>
        </div>
       
      </IonContent>
    </IonPage>
  );
};

export default Tanqueinfo;
