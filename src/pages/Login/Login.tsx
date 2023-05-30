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
import { STORAGEKEY,keytoken } from "../../hook/database/interfaces";
import "./Login.css";
import {getLoginApi} from "../../apis/apisUser"
import { useState } from "react";
import { useStorage } from "../../hook/database/useStorage";
const Login: React.FC = () => {
  const {getValuesKey,addValuesKey,deleteAllKey,updateValuesKey,deleteValuesKey}= useStorage()
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [messageToast, setMessageToast] = useState("");
  
  const actionSend=async ()=>{
    const valor= await getLoginApi(valuesInput)
    if(valor.status){
      if(Number(valor.status)===200){
        let valoringreso:keytoken={}as any
        valoringreso.expiretoken=valor.data.expires_at
        valoringreso.token=valor.data.access_token
        valoringreso.typetoken=valor.data.token_type
        const valorAgregado = await addValuesKey(STORAGEKEY.token,valoringreso)
        history.push('/home');
      }else{
        setMessageToast("Error en conexion con el usuario")
        setIsOpen(true)
      }
    }else{
      setMessageToast("Error en conexion con el usuario")
      setIsOpen(true)
    }
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
      <IonContent className="login ion-padding-horizontal" fullscreen>
        <div className="ion-padding-bottom">
          <h2>Bienvenido al Login</h2>
        </div>
        <div className="the-form">
          <div className="input-holder">
            <IonLabel className="input-label">Email</IonLabel>
            <IonItem className="input-item">
              <IonInput
                className="form-input"
                placeholder="Correo electronico"
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
                placeholder="Password"
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
                <IonLabel className="rem-label">Recordar Contraseña</IonLabel>
              </IonItem>
            </IonCol>

            <IonCol size="6">
              <IonButton className="forgot-button">Olvidaste Contraseña?</IonButton>
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
            No tienes una cuenta?
          
          </p>
          <IonButton className="bottom-btn-span" routerLink="signup">
              Registrar
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