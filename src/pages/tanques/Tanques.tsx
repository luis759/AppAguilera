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
import Designtanque from "../../components/designtanque";
import SelectransactionModal from "../Modals/Selectransactionmodal/Selectransactionmodal";

import "./Tanques.css";

const Tanques: React.FC = () => {
  const [dataTanque,setDataTanque]=useState([{porcentaje:50,nombre:"tanque"},{porcentaje:45,nombre:"tanque1"},{porcentaje:15,nombre:"tanque2"}] as any)
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
          <Designtanque key={key} porcentaje={retorno.porcentaje} niveles={{NivelCritico:25,NivelBajo:50,NivelAlto:80}} colores={{color_bajo:"red",color_medio:"yellow",color_alto:"green"}}/>
         </IonCard>
          </>)
        })}        
        
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tanques;
