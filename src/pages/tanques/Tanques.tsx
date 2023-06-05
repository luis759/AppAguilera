import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chatbox, heartOutline, notifications } from "ionicons/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useParams } from "react-router";
import Designtanque from "../../components/designtanque";
import SelectransactionModal from "../Modals/Selectransactionmodal/Selectransactionmodal";

import "./Tanques.css";
import { useStorage } from "../../hook/database/useStorage";
import { getTanques } from "../../apis/apisUser";
import { STORAGEKEY } from "../../hook/database/interfaces";

const Tanques: React.FC = () => {
  const [dataTanque,setDataTanque]=useState([] as any)
  const [colores,setColores] =useState({} as any)
  const {getValuesKey,addValuesKey,deleteAllKey,updateValuesKey,deleteValuesKey,storage}= useStorage()
  const params=useParams()
  const [datatoken,setToken]=useState({})
  useEffect(()=>{
    if(storage){
      const mostrarValores= async ()=>{
        const valores= await getValuesKey(STORAGEKEY.token)
      if(valores){
        setToken(valores[0])
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
  const valoresTanques = await getTanques(valores[0].token,valores[0].typetoken)
  setColores(valoresTanques.data.colores)
  setDataTanque(valoresTanques.data.tanques.map((dato:any)=>{
    return({
      porcentaje:Number(dato.porcentaje).toFixed(2),
      nombre:dato.Nombre,
      id:dato.id,
      niveles:{
        NivelCritico:dato.NivelCritico,
        NivelBajo:dato.NivelBajo,
        NivelAlto:dato.NivelAlto
      }
    })
  }))
 }
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="background-holder2">
          <IonTitle className="ion-text-center">Tanques</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/notifications">
              <IonIcon className="fav" icon={notifications} slot="end" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen  className="ion-padding">
      <IonList>
   
        {dataTanque.map((retorno:any,key:number)=>{
          return(<>
      <IonCard key={key}>
          <IonCardHeader className="ion-text-center">
            <IonCardTitle>Nombre: {retorno.nombre}</IonCardTitle>
          </IonCardHeader>
          <Designtanque key={key} porcentaje={retorno.porcentaje} niveles={retorno.niveles} colores={colores}/>
         </IonCard>
          </>)
        })}        
        
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tanques;
