import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from "swiper";

import "./Intro.css";

import "@ionic/react/css/ionic-swiper.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useStorage } from "../../hook/database/useStorage";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { STORAGEKEY } from "../../hook/database/interfaces";
import { getImageStart } from "../../apis/apisUser";


const Intro: React.FC = () => {
  const history = useHistory();
  const {storage,getValuesKey,addValuesKey,deleteAllKey}= useStorage()
  const [imagenView,setImageView]= useState("")
  useEffect(()=>{
    if(storage){
      const mostrarValores= async ()=>{
        const valores= await getValuesKey(STORAGEKEY.imagenstart)
        if(valores){
          if(valores.length>0){
            setImageView(valores[0])
          }else{
            setImageView("assets/imgs/index.jpg")
          }
        }else{
          setImageView("assets/imgs/index.jpg")
        }
        callnewimage()
      }
      mostrarValores()
    }
  },[storage])
  const callnewimage= async ()=>{
    
    const valor= await getImageStart()
    if(Number(valor.status)===200){
      let imagen=valor.data
      const borrado = await deleteAllKey(STORAGEKEY.imagenstart)
      const valorAgregado = await addValuesKey(STORAGEKEY.imagenstart,imagen)
    }
    iralLugar()
  }
  const  iralLugar = async ()=>{
    const valores= await getValuesKey(STORAGEKEY.token)
    if(valores){
      if(valores.length>0){
        setTimeout(function() {    
          history.push("/tanques")
      }.bind(this), 5000)
     
      }else{
        setTimeout(function() {    
          history.push("/login")
      }.bind(this), 5000)
      }
    }else{
      setTimeout(function() {    
        history.push("/login")
    }.bind(this), 5000)
    }
  }
  return (
    <IonPage>
      <IonContent className="ion-padding intro" fullscreen>
        <div style={{height:"100%",width:"100%"}}>
          <img src={imagenView}  style={{height:"100%",width:"100%"}}/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Intro;
