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
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { checkmarkCircle } from "ionicons/icons";

import "./Signup.css";

const Signup: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding-horizontal" fullscreen>
        <div className="ion-padding-bottom">
          <h2>Signup Here</h2>
        </div>
        <div className="the-form">
          <div className="input-holder">
            <IonLabel className="input-label">Username</IonLabel>
            <IonItem className="input-item">
              <IonInput
                className="form-input"
                placeholder="Enter Name"
                type="text"
              />
              <IonIcon
                className="verify-tick"
                icon={checkmarkCircle}
                slot="end"
              />
            </IonItem>
          </div>

          <div className="input-holder">
            <IonLabel className="input-label">Email</IonLabel>
            <IonItem className="input-item">
              <IonInput
                className="form-input"
                placeholder="Enter Email"
                type="email"
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
            <IonCol size="12">
              <IonItem className="rem-item" lines="none">
                <IonCheckbox className="rem-check" slot="start" mode="ios" />
                <IonLabel className="rem-label ion-text-wrap">By creating an account, you agree to our
                    Term and Conditions</IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </div>

        <div className="btn-holder">
          <IonButton expand="block" className="login-button">
            Signup
          </IonButton>
        </div>

        <div className="bottom-holder flex al-center jc-center ion-text-center">
          <p className="bottom-btn">
            Already have a account?
          </p>
          <IonButton className="bottom-btn-span" routerLink="login">
              Login
            </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
