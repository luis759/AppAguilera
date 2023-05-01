import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCheckbox,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonToast,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from 'react-router-dom';
import { checkmarkCircle } from "ionicons/icons";

import "./Login.css";
import {getLoginApi} from "../../apis/apisUser"
import { useState } from "react";
const Login: React.FC = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [messageToast, setMessageToast] = useState("");
  
  const actionSend=async ()=>{
    const valor= await getLoginApi(valuesInput)
    if(valor.status){
      if(Number(valor.status)===200){
        history.push('/home');

      }else{
        setMessageToast("Error en conexion con el usuario")
        setIsOpen(true)
      }
    }else{
      setMessageToast("Error en conexion con el usuario")
      setIsOpen(true)
    }
    console.log(valor.error)
  }
  
  const [valuesInput,setValuesInput] = useState({
    email:'',
    password:''
  });
  const changeValues= (eventos:any)=>{
    const {name,value}=eventos.target
    setValuesInput({
      ...valuesInput,
      [name]: value
    })
  }
  
  return (
    <IonPage>
      <IonHeader className="login-header ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="login ion-padding-horizontal" fullscreen>
        <div className="ion-padding-bottom">
          <h2>Welcome Login</h2>
        </div>
        <div className="social-holder">
          <div className="btns-holder ion-text-center">
            <IonButton className="btn">
              <img src="assets/imgs/facebook.svg" alt="" />
            </IonButton>

            <IonButton className="btn">
              <img src="assets/imgs/google.svg" alt="" />
            </IonButton>
          </div>
        </div>
        <div className="the-form">
          <div className="input-holder">
            <IonLabel className="input-label">Username</IonLabel>
            <IonItem className="input-item">
              <IonInput
                className="form-input"
                placeholder="Enter Name"
                type="text"
                name="email"
                onIonInput={changeValues}
              />
              <IonIcon
                className="verify-tick"
                icon={checkmarkCircle}
                slot="end"
              />
            </IonItem>
          </div>

          <div className="input-holder">
            <IonLabel className="input-label">Password</IonLabel>
            <IonItem className="input-item">
              <IonInput
                className="form-input"
                placeholder="Enter Password"
                type="password"
                name="password"
                onIonInput={changeValues}
              />
              <IonIcon
                className="verify-tick"
                icon={checkmarkCircle}
                slot="end"
              />
            </IonItem>
          </div>
        </div>

        <div className="rem-holder">
          <IonRow>
            <IonCol size="6">
              <IonItem className="rem-item" lines="none">
                <IonCheckbox className="rem-check" slot="start" mode="ios" />
                <IonLabel className="rem-label">Remember me</IonLabel>
              </IonItem>
            </IonCol>

            <IonCol size="6">
              <IonButton className="forgot-button">Forgot password?</IonButton>
            </IonCol>
          </IonRow>
        </div>

        <div className="btn-holder">
          <IonButton expand="block" className="login-button" onClick={()=>{actionSend()}}>
            Login
          </IonButton>
        </div>

        <div className="bottom-holder flex al-center jc-center ion-text-center">
          <p className="bottom-btn">
            Don’t have a account?
          
          </p>
          <IonButton className="bottom-btn-span" routerLink="signup">
              Signup
            </IonButton>
        </div>
         <IonToast
          isOpen={isOpen}
          message={messageToast}
          onDidDismiss={() => setIsOpen(false)}
          duration={5000}
        ></IonToast>
      </IonContent>
    </IonPage>
  );
};

export default Login;
