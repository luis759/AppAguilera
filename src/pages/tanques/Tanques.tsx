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
import { getallSitios, getAlltanques, getTanques } from "../../apis/apisUser";
import { STORAGEKEY } from "../../hook/database/interfaces";

const Tanques: React.FC = () => {
  const [dataTanque,setDataTanque]=useState([] as any)
  const [sitios,setSitios]=useState([] as any)
  const [tanques,setTanques]=useState([] as any)
  const [showTanques,setTanquesShow]=useState([] as any)
  const [colores,setColores] =useState({} as any)
  const [BuscarArreglo,setTanqueBuscar] =useState([] as any)
  const {getValuesKey,addValuesKey,deleteAllKey,updateValuesKey,deleteValuesKey,storage}= useStorage()
  const params=useParams()
  const [datatoken,setToken]=useState({})
  var t: any;
  useEffect(()=>{
    if(storage){
      const mostrarValores= async ()=>{
        const valores= await getValuesKey(STORAGEKEY.token)
        valoresTanquesySitios(valores)
      if(valores){
        setToken(valores)
        iniciarInterValos([],valores)
        }
      }
      mostrarValores()
    }
  },[storage])
  const valoresTanquesySitios = async (valores:any)=>{
    const valoresSitios = await getallSitios(valores[0].token,valores[0].typetoken)
    const valoresTanques = await getAlltanques(valores[0].token,valores[0].typetoken)
    setSitios(valoresSitios.data.sitios)
    setTanques(valoresTanques.data.tanques)
  }
 const getInfosValores= async (valores:any,tanques:any)=>{
  const valoresTanques = await getTanques(valores[0].token,valores[0].typetoken)
  if(valoresTanques.data.colores){
    setColores(valoresTanques.data.colores)
  }
  var res=valoresTanques.data.tanques
  if(tanques.length>0){

    res = valoresTanques.data.tanques.filter((item:any) => tanques.includes(item.id));
  }
  setDataTanque(res.map((dato:any)=>{
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
 const cambioSitios =(e:any)=>{
  if(e.detail.value){
    setTanquesShow(tanques.filter((ef:any)=> Number(ef.Sitio)===Number(e.detail.value)))
  }else{
    setTanquesShow(tanques)
  }
 }
 const cambioTanqueShow =(e:any)=>{
  setTanqueBuscar(e.detail.value)
 }
 const buscar = ()=>{
  if(BuscarArreglo.some((e:any)=> e==="")){
    iniciarInterValos(showTanques.map((tanque:any)=>{
      return(tanque.id)
    }),[])

  }else{
    if(BuscarArreglo.length>0){
      iniciarInterValos(BuscarArreglo,[])
    }
  }
 }
 const iniciarInterValos=(tanques:any,tokena:any)=>{
  const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

  // Clear any timeout/interval up to that id
  for (let i = 1; i < interval_id; i++) {
    window.clearInterval(i);
  }
  if(tokena.length>0){
    getInfosValores(tokena,tanques)
    t=setInterval( async ()=> {
      getInfosValores(tokena,tanques)
     }, 5000);
  }else{
    getInfosValores(datatoken,tanques)
    t=setInterval( async ()=> {
      getInfosValores(datatoken,tanques)
     }, 5000);
  }

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
          <IonSelect aria-label="Sitios" interface="action-sheet" placeholder="Select Sitios"  onIonChange={cambioSitios}
           >
              <IonSelectOption value="">Todos</IonSelectOption>
            {sitios.map((datos:any)=>{
              return(<>
              
              <IonSelectOption value={datos.id}>{datos.Nombre}</IonSelectOption>
              </>)
            })}
            </IonSelect>
        </IonItem>
        <IonItem>
          
        <IonLabel>
            Tanques Mostrar
          </IonLabel>
          <IonSelect aria-label="tanques" placeholder="Select Tanques Mostrar" onIonChange={cambioTanqueShow} multiple={true}>
          <IonSelectOption value="">Todos</IonSelectOption>
            {showTanques.map((datos:any)=>{
              return(<>
              
              <IonSelectOption value={datos.id}>{datos.Nombre}</IonSelectOption>
              </>)
            })}
          </IonSelect>
        </IonItem>
        <IonButton expand="block" onClick={ buscar}>Buscar</IonButton>
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
