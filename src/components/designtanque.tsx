
import { CreateAnimation, IonBadge, IonLabel } from "@ionic/react";
import React, { useEffect, useState } from "react"
import "./css/tanque.css"
const Designtanque = (porcentaje:any) => {
    const [dataTanque,setData]= useState({})
    const [water,setwater]= useState({})
    const [badge,setBadge]= useState({})
    const [campos,setValorCampos]= useState({
      litrosactuales:0,
      capacidad:0
    })
    useEffect(()=>{
      
      let valor=(100-porcentaje.porcentaje)<0?0:((100-porcentaje.porcentaje)>100?100:(100-porcentaje.porcentaje))
  
        if(Number(porcentaje.porcentaje) < Number(porcentaje.niveles.NivelCritico)){
            setData({
                boxShadow:"0 0 20px "+porcentaje.colores.color_bajo,
                textShadow:"0 0 20px "+porcentaje.colores.color_bajo,
                color:"black",
                border:"1px solid "+porcentaje.colores.color_bajo,
                justifyContent: "center",
                display: "flex",
                alignItems: "center"
            })
            setwater({ 
                background:porcentaje.colores.color_bajo,
                top:""+(valor)+"%",
                zIndex:"-555"
            })
          } else if(Number(porcentaje.porcentaje) < Number(porcentaje.niveles.NivelBajo)){
            setData({
                boxShadow:"0 0 20px "+porcentaje.colores.color_medio,
                textShadow:"0 0 20px "+porcentaje.colores.color_medio,
                color:"black",
                border:"1px solid "+porcentaje.colores.color_medio,
                justifyContent: "center",
                display: "flex",
                alignItems: "center"
          
            })
            setwater({ 
                background:porcentaje.colores.color_medio,
                top:""+(valor)+"%" ,
                zIndex:"-555"
            })
          }else{
            setData({
                boxShadow:"0 0 20px "+porcentaje.colores.color_alto,
                textShadow:"0 0 20px "+porcentaje.colores.color_alto,
                color:"black",
                border:"1px solid "+porcentaje.colores.color_alto,
                justifyContent: "center",
                display: "flex",
                alignItems: "center"
             
            })
            setwater({ 
                background:porcentaje.colores.color_alto,
                top:""+(valor)+"%" ,
                zIndex:"-555"
            })
          }
          if(porcentaje.Capacidad){
            setValorCampos({
              litrosactuales:porcentaje.litrosActuales?porcentaje.litrosActuales:0,
              capacidad:porcentaje.Capacidad?porcentaje.Capacidad:0
            })
          }
          
          setBadge({
            color:"black",
            fontWeight:"bolder",
            display: "flex",
            alignItems: "center",
            height:"85%"
          })

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
    <div className={`water ${porcentaje.porcentaje<=25? "crit ion-text-center" : (porcentaje.porcentaje>75?"alt ion-text-center":"med ion-text-center")}`} style={water}></div>
</CreateAnimation>

<p style={badge}>{porcentaje.porcentaje} % </p>
  </div>
    </div>
    <p className="ion-no-margin ion-margin-top">
    <IonLabel className="ion-text-center">
 <p className="ion-no-margin">Litros: <IonBadge>{campos.litrosactuales}</IonBadge></p>
 <p className="ion-no-margin">Capacidad: <IonBadge>{campos.capacidad}</IonBadge></p>
  </IonLabel>
    </p>


    </>
  )
};

export default Designtanque;