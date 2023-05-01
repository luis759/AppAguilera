import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./Sendmoney.css";

const Sendmoney: React.FC = () => {
  const [unit, setUnit] = useState<string>();

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="requestmoney-toolbar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="request"></IonBackButton>
          </IonButtons>
          <IonTitle className="ion-text-center">
            Send money to <span>John Doe</span>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="requestmoney">
        <IonGrid style={{ height: "100%" }}>
          <IonRow
            className="ion-justify-content-center ion-align-items-center"
            style={{ height: "100%" }}
          >
            <div className="money-holder animate__animated animate__zoomIn">
              <div className="input-holder ion-text-center">
                <div className="sign-holder">
                  <h1>{unit}</h1>
                </div>
                <IonInput
                  type="tel"
                  value="0.00"
                  class="ion-text-center"
                ></IonInput>
              </div>

              <div className="unit-holder ion-text-center">
                <IonItem lines="none">
                  <IonSelect
                    multiple={false}
                    className="ion-text-center"
                    placeholder="Select Unit"
                    value={unit}
                    onIonChange={(e) => setUnit(e.detail.value)}
                  >
                    <IonSelectOption value="$">USD</IonSelectOption>
                    <IonSelectOption value="e">EURO</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </div>
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>

      <IonFooter class="ion-no-border">
        <IonToolbar className="requestmoney-footer-toolbar">
          <div className="ion-padding">
            <IonButton expand="block" routerLink="reviewandsend">Next</IonButton>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Sendmoney;
