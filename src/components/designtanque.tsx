
import { CreateAnimation, IonBadge } from "@ionic/react";
import React, { useEffect, useState } from "react"
import "./css/tanque.css"
const Designtanque = (porcentaje:any) => {
    const [dataTanque,setData]= useState({})
    const [water,setwater]= useState({})
    const [badge,setBadge]= useState({})
    useEffect(()=>{
        if(porcentaje.porcentaje < porcentaje.niveles.NivelCritico){
            setData({
                boxShadow:"0 0 20px "+porcentaje.colores.color_bajo,
                textShadow:"0 0 20px "+porcentaje.colores.color_bajo,
                color:"black",
                border:"1px solid "+porcentaje.colores.color_bajo,
            })
            setBadge({
              background:porcentaje.colores.color_bajo,
              color:"black",
              fontWeight:"bolder"
            })
            setwater({ 
                background:porcentaje.colores.color_bajo,
                top:100-porcentaje.porcentaje 
            })
          } else if(porcentaje.porcentaje < porcentaje.niveles.NivelBajo){
            setData({
                boxShadow:"0 0 20px "+porcentaje.colores.color_medio,
                textShadow:"0 0 20px "+porcentaje.colores.color_medio,
                color:"black",
                border:"1px solid "+porcentaje.colores.color_medio,
          
            })
            setBadge({
              background:porcentaje.colores.color_medio,
              color:"black",
              fontWeight:"bolder"
            })
            setwater({ 
                background:porcentaje.colores.color_medio,
                top:100-porcentaje.porcentaje 
            })
          }else{
            setData({
                boxShadow:"0 0 20px "+porcentaje.colores.color_alto,
                textShadow:"0 0 20px "+porcentaje.colores.color_alto,
                color:"black",
                border:"1px solid "+porcentaje.colores.color_alto,
             
            })
            setBadge({
              background:porcentaje.colores.color_alto,
              color:"black",
              fontWeight:"bolder"
            })
            setwater({ 
                background:porcentaje.colores.color_alto,
                top:100-porcentaje.porcentaje 
            })
          }

    },[porcentaje])
  return(
    <>
    <div className="ion-text-center ion-margin-top" style={{justifyContent:"center",display:"flex"}}>
    <div className="forma-tanque" style={dataTanque}>
  <CreateAnimation  
  play={true}
  duration={5000}
  iterations={Infinity}
  keyframes={[
    { offset: 0, transform: 'scale(1) rotate(0deg)' },
    { offset: 0.1, transform: 'scale(1) rotate(36deg)' },
    { offset: 0.2, transform: 'scale(1) rotate(72deg)' },
    { offset: 0.3, transform: 'scale(1) rotate(108deg)' },
    { offset: 0.4, transform: 'scale(1) rotate(144deg)' },
    { offset: 0.5, transform: 'scale(1) rotate(180deg)' },
    { offset: 0.6, transform: 'scale(1) rotate(216deg)' },
    { offset: 0.7, transform: 'scale(1) rotate(252deg)' },
    { offset: 0.8, transform: 'scale(1) rotate(288deg)' },
    { offset: 0.9, transform: 'scale(1) rotate(324deg)' },
    { offset: 1, transform: 'scale(1) rotate(360deg)' },
  ]}
    >
    <div className={`water ${porcentaje.porcentaje<=25? "crit" : (porcentaje.porcentaje>75?"alt":"med")}`} style={water}></div>
</CreateAnimation>

  </div>
 
    </div>
    <p className="ion-text-center">
  <IonBadge color="primary" style={badge}>{porcentaje.porcentaje} % </IonBadge>
  </p>

    </>
  )
};

export default Designtanque;