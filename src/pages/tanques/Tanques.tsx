import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
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
      litrosActuales:dato.LitrosActuales,
      Capacidad:dato.Capacidad,
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
   <IonGrid>
    <IonRow>
      <IonCol size="12">
        <IonItem>
          <IonLabel>
            Sitios
          </IonLabel>
          <IonSelect aria-label="Sitios" interface="action-sheet" placeholder="Select Sitios">
              <IonSelectOption value="apples">Apples</IonSelectOption>
              <IonSelectOption value="oranges">Oranges</IonSelectOption>
              <IonSelectOption value="bananas">Bananas</IonSelectOption>
            </IonSelect>
        </IonItem>
        <IonItem>
          
        <IonLabel>
            Tanques Mostrar
          </IonLabel>
          <IonSelect aria-label="tanques" placeholder="Select Tanques Mostrar" multiple={true}>
            <IonSelectOption value="apples">Apples</IonSelectOption>
            <IonSelectOption value="oranges">Oranges</IonSelectOption>
            <IonSelectOption value="bananas">Bananas</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton expand="block">Buscar</IonButton>
      </IonCol>
    </IonRow>
    <IonRow>
    {dataTanque.map((retorno:any,key:number)=>{
          return(<>
          <IonCol size="6">
          <IonCard key={key} routerLink={"/tanqueinfo/"+retorno.nombre+"/"+retorno.id}>
          <IonCardHeader className="ion-text-center">
            <IonCardTitle>Nombre: {retorno.nombre}</IonCardTitle>
          </IonCardHeader>
          <Designtanque key={key} porcentaje={retorno.porcentaje} Capacidad={retorno.Capacidad}  litrosActuales={retorno.litrosActuales} niveles={retorno.niveles} colores={colores}/>
         </IonCard>
          </IonCol>
    
          </>)
        })}
    </IonRow>
   </IonGrid>
               
        
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tanques;
