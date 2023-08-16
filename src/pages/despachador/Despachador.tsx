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
  IonTabBar, IonTabButton,IonFooter, IonTabs, IonCardContent, IonInput, IonToast, IonDatetime
} from "@ionic/react";
import React, { useEffect } from "react";
import { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { useHistory, useParams } from "react-router";
import { homeOutline ,carSport,home,carSportOutline,notifications} from 'ionicons/icons';
import "./Despachador.css";
import { useStorage } from "../../hook/database/useStorage";
import { getAllClientes, getAllBombas,getAllVehiculos, postadjudicarCombustible,postLoginDespachador } from "../../apis/apisUser";
import { STORAGEKEY } from "../../hook/database/interfaces";

const Despachador: React.FC = () => {
  const history = useHistory();
  const {getValuesKey,addValuesKey,deleteAllKey,updateValuesKey,deleteValuesKey,storage}= useStorage()
  const [datatoken,setToken]=useState({} as any)
  const [messageToast, setMessageToast] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [Clientes, setClientes] = useState([]as any);
  const [Bombas, setBombas] = useState([]as any);
  const [Vehiculos, setVehiculos] = useState([]as any);
  const [Despachador, setDatoDespachador] = useState({} as  any);
  var t: any;
  useEffect(()=>{
    if(storage){
      const mostrarValores= async ()=>{
        const valores= await getValuesKey(STORAGEKEY.token)
      if(valores){
        setToken(valores)
        inciarValores(valores)
        }
      }
      mostrarValores()
    }
  },[storage])
  const [valuesInput,setValuesInput] = useState({
    telefono:'',
    pin:''
  });
  const inciarValores=async (token:any)=>{
    const clientes = await getAllClientes(token[0].token,token[0].typetoken)
    const vehiculos = await getAllVehiculos(token[0].token,token[0].typetoken)
    const bombas = await getAllBombas(token[0].token,token[0].typetoken)
    if(clientes.status==200){
      setClientes(clientes.data)
    }
    if(vehiculos.status==200){
      setVehiculos(vehiculos.data)
    }
    if(bombas.status==200){
      setBombas(bombas.data)
    }
  }
  const [valuesInput2,setValuesInput2] = useState({
    cantidad:'',
    cliente:'',
    bomba:'',
    vehiculo:'',
    fecha:'',
    hora:''
  });
  const LoginDespachador=async ()=>{
    if(valuesInput.pin){
      if(valuesInput.telefono){
        const datoEnvios= await postLoginDespachador(datatoken[0].token,datatoken[0].typetoken,valuesInput)
        if(datoEnvios.status==200){
          if(datoEnvios.data.success){
            setDatoDespachador(datoEnvios.data.data)
          }else{
            if(datoEnvios.data.message=="telefono"){
              setMessageToast("Error en Telefono del Despachador")
              setIsOpen(true)

            }else{

              setMessageToast("Error en PIN del Despachador")
              setIsOpen(true)
            }
          }
        }
        console.log(datoEnvios)
      }
    }
  }
  const SalirDespachador=()=>{
    setDatoDespachador({} as any)
  }
  const changeValues= (eventos:any)=>{
    const {name,value}=eventos.target
    setValuesInput({
      ...valuesInput,
      [name]: value
    })
  }
  const changeValues2= (eventos:any)=>{
    const {name,value}=eventos.target
    setValuesInput2({
      ...valuesInput2,
      [name]: value
    })
  }
  const generarDespacho= async ()=>{
    const datoEnvio=await postadjudicarCombustible(datatoken[0].token,datatoken[0].typetoken,{
      Fecha:valuesInput2.fecha,
      Hora:valuesInput2.hora,
      Vehiculo_id:valuesInput2.vehiculo,
      Cliente_id:valuesInput2.cliente,
      Cantidad:valuesInput2.cantidad,
      Bomba_id:valuesInput2.bomba,
      Despachador_id:Despachador.id
    })
  
    setMessageToast("Despacho Generado")
    setIsOpen(true)
    console.log(datoEnvio)
  }
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="background-holder2">
          <IonTitle className="ion-text-center">Despachador</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/notifications">
              <IonIcon className="fav" icon={notifications} slot="end" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen  className="ion-padding">
            <IonCard>
            <IonCardHeader>
              <IonCardTitle> {Despachador.id?"Despachador":"Colocar Ingreso del Despachador"}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
            {Despachador.id?<>
              <IonGrid>
           
           <IonRow>
             <IonCol size="12">
             <IonItem>
               <IonLabel>Nombre: {Despachador.Nombre}</IonLabel>
             </IonItem>
             </IonCol>

             <IonCol size="12">
             <IonItem>
               <IonLabel  position="floating">Telefono :  {Despachador.Telefono}</IonLabel>
             </IonItem>
             </IonCol>

           </IonRow>
           </IonGrid>
           <IonButton onClick={SalirDespachador}>Salir</IonButton>
                </>:<>
                <IonGrid>
           
           <IonRow>
             <IonCol size="12">
             <IonItem>
               <IonLabel  position="floating">Ingrese Numero telefono</IonLabel>
               <IonInput  title="Ingrese Numero telefono" 
             onIonInput={changeValues}
             name="telefono"></IonInput>
             </IonItem>

             </IonCol>
             
             <IonCol size="12">
               
             <IonItem>
               <IonLabel  position="floating">Ingrese PIN</IonLabel>
               <IonInput 
             onIonInput={changeValues} name="pin" title="Ingrese PIN"></IonInput>
             </IonItem>
             </IonCol>
           </IonRow>
           </IonGrid>
           <IonButton onClick={LoginDespachador}>Ingresar</IonButton>
                </>}
           
            </IonCardContent>
          </IonCard>
          {Despachador.id?<>
            <IonCard>

          <IonCardHeader>
              <IonCardTitle> Datos de Carga de Bomba</IonCardTitle>
            </IonCardHeader>

          <IonCardContent>
          <IonList>
            <IonItem>
            <IonLabel  position="floating">Fecha</IonLabel>
               <IonInput 
             onIonInput={changeValues2} name="fecha" type="date"></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel  position="floating">hora</IonLabel>
               <IonInput 
             onIonInput={changeValues2} name="hora" type="time"></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel  position="floating">Cantidad</IonLabel>
               <IonInput 
             onIonInput={changeValues2} name="cantidad" type="number"></IonInput>
            </IonItem>
            <IonItem>
            <IonLabel  position="floating">Cliente:</IonLabel>
                <IonSelect name="cliente"  placeholder="" onIonChange={changeValues2}>
                  {Clientes.map((dato:any)=>{
                    return( <IonSelectOption value={dato.id}>{dato.Razon}</IonSelectOption>)
                  })}
                </IonSelect>
            </IonItem>
            <IonItem>
            <IonLabel  position="floating">Bomba:</IonLabel>
                <IonSelect name="bomba"  placeholder="" onIonChange={changeValues2}>
                {Bombas.map((dato:any)=>{
                    return( <IonSelectOption value={dato.id}>{dato.Nombre}</IonSelectOption>)
                  })}
                </IonSelect>
            </IonItem>
            <IonItem>
            <IonLabel  position="floating">Vehiculo:</IonLabel>
                <IonSelect name="vehiculo"  placeholder="" onIonChange={changeValues2}>
                {Vehiculos.map((dato:any)=>{
                    return( <IonSelectOption value={dato.id}>{dato.Nombre}</IonSelectOption>)
                  })}
                </IonSelect>
            </IonItem>
          </IonList>
          </IonCardContent>
          </IonCard>
           <IonButton onClick={generarDespacho}>Generar Despacho</IonButton>
          </>:<>
          
          </>}
   



      </IonContent>
      <IonFooter>
      <IonTabBar  onIonTabsDidChange={(e)=>{if(e.detail.tab==="tanques") history.replace("/Tanques")}}>
          <IonTabButton  tab="tanques">
              
            <IonIcon icon={homeOutline} className="unselected" ></IonIcon>
            <IonIcon icon={home}  className="selected" color="primary"></IonIcon>
            <IonLabel>Tanques</IonLabel>
          </IonTabButton>

          <IonTabButton tab="despachador">
            <IonIcon icon={carSport}className="unselected" color="primary" ></IonIcon>
            <IonIcon icon={carSportOutline}   className="selected" ></IonIcon>
            <IonLabel>Despachador</IonLabel>
          </IonTabButton>
        </IonTabBar>

      </IonFooter>
      <IonToast
          isOpen={isOpen}
          message={messageToast}
          onDidDismiss={() => setIsOpen(false)}
          duration={5000}
        ></IonToast>
    </IonPage>
  );
};

export default Despachador;
