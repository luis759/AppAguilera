import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useEffect, useState } from "react";
import "./Notifications.css";
import { arrowDownCircleOutline, arrowUpCircleOutline } from "ionicons/icons";
import { useStorage } from "../../hook/database/useStorage";
import { useParams } from "react-router";
import { STORAGEKEY } from "../../hook/database/interfaces";
import { getNotificaciones } from "../../apis/apisUser";

const Notifications: React.FC = () => {
  const [dataNotificaciones,setNotifiaciones]=useState([] as any)
  const {getValuesKey,addValuesKey,deleteAllKey,updateValuesKey,deleteValuesKey,storage}= useStorage()
  const params=useParams()
  useEffect(()=>{
    if(storage){
      const mostrarValores= async ()=>{
        const valores= await getValuesKey(STORAGEKEY.token)
        if(valores){
        getInfosValores(valores)
        let t: any;
        t=setInterval( async ()=> {
         getInfosValores(valores)
        }, 5000);
        }
      }
      mostrarValores()
    }
  },[storage])
 const getInfosValores= async (valores:any)=>{
  const valoresNotifiaciones = await getNotificaciones(valores[0].token,valores[0].typetoken)
  if(valoresNotifiaciones.data){
    setNotifiaciones(valoresNotifiaciones.data.map((dato:any)=>{
      return({
        nombre:dato.nombre,
        litros:dato.cantidad,
        fecha:dato.fecha,
        hora:dato.hora,
        datodescarga:Number(dato.cantidad)>0?"Carga":"Descarga",
        color:Number(dato.cantidad)>0?"success":"danger",
      })
    }))
  }
 
 }
  
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="notifications-toolbar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="tabs"></IonBackButton>
          </IonButtons>
          <IonTitle className="ion-text-center">Notificaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="notifications ion-padding">
        <div className="section animate__animated animate__fadeInUp">
          <div className="section-title">
            <h4>Ultimas 10 Notificaciones</h4>
          </div>
          <div className="the-list">
            {dataNotificaciones.map((datoMostrar:any)=>{
              return(<>
              <IonItem>
              <IonAvatar slot="start">
      <IonIcon icon={datoMostrar.color==="danger"?arrowDownCircleOutline:arrowUpCircleOutline} color={datoMostrar.color} size="large"></IonIcon>
              </IonAvatar>
              <IonLabel>
                <h5 className="ion-text-wrap">
                  El tanque {datoMostrar.nombre}  ha tenido una {datoMostrar.datodescarga} de {datoMostrar.litros} litros
                </h5>
                <p>fecha : {datoMostrar.fecha}</p>
                <p>hora : {datoMostrar.hora}</p>
              </IonLabel>
            </IonItem>
              </>)
            })}
            
          </div>
        </div>
       
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
