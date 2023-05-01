import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonDatetime,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { RouteComponentProps } from "react-router";
import Successmodal from "../Modals/Successmodal/Successmodal";
import "./Addincome.css";
interface OwnProps extends RouteComponentProps {}
const Addincome: React.FC<OwnProps> = ({ history }) => {
  const [unit, setUnit] = useState<string>();
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => {
    history.push("/tabs");
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="addincome-toolbar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="tabs"></IonBackButton>
          </IonButtons>
          <IonTitle className="ion-text-center">Add Income</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="addincome">
      <IonModal
          isOpen={modalOpen}
          class="modaaal"
          className="modaaal"
          onDidDismiss={handleModalClose}
        >
          <Successmodal onClose={() => setModalOpen(false)} />
        </IonModal>
        <div className="moneyy-holder animate__animated animate__zoomIn">
          <IonItem lines="none">
            <div className="start-slot" slot="start">
              <h1>{unit}</h1>
            </div>
            <IonInput type="tel" value="0.00"></IonInput>
          </IonItem>
          <div className="unit-holder">
            <IonItem text-center lines="none">
              <IonSelect
                multiple={false}
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

        <div className="the-form ion-padding-horizontal">
          <div className="detail-item">
            <IonLabel  >Transaction Date</IonLabel>
            <IonItem style={{ marginTop:"20px" }}>
              <IonDatetime presentation="date"  placeholder="SELECT DATE" text-left></IonDatetime>
            </IonItem>
          </div>
          <div className="detail-item">
            <IonLabel>Category</IonLabel>
            <div className="cat-holder animate__animated animate__fadeInRight">
              <IonRadioGroup>
                <div className="rad-item ion-text-center">
                  <IonItem className="ion-text-center">
                    <img src="assets/imgs/transport.svg" alt="" />
                    <IonRadio value="transport"></IonRadio>
                  </IonItem>
                  <IonLabel>Transport</IonLabel>
                </div>
                <div className="rad-item ion-text-center">
                  <IonItem className="ion-text-center">
                    <img src="assets/imgs/foods.svg" alt="" />
                    <IonRadio value="foods"></IonRadio>
                  </IonItem>
                  <IonLabel>Foods</IonLabel>
                </div>
                <div className="rad-item ion-text-center">
                  <IonItem className="ion-text-center">
                    <img src="assets/imgs/shopping1.svg" alt="" />
                    <IonRadio value="shopping"></IonRadio>
                  </IonItem>
                  <IonLabel>Shopping</IonLabel>
                </div>
                <div className="rad-item ion-text-center">
                  <IonItem className="ion-text-center">
                    <img src="assets/imgs/bill1.svg" alt="" />
                    <IonRadio value="bill"></IonRadio>
                  </IonItem>
                  <IonLabel>Bills</IonLabel>
                </div>
                <div className="rad-item ion-text-center">
                  <IonItem className="ion-text-center">
                    <img src="assets/imgs/tax.svg" alt="" />
                    <IonRadio value="taxs"></IonRadio>
                  </IonItem>
                  <IonLabel>Taxs</IonLabel>
                </div>
              </IonRadioGroup>
            </div>
          </div>
          <div className="detail-item">
            <IonLabel>Notes</IonLabel>
            <IonItem lines="none">
              <IonTextarea rows={5}></IonTextarea>
            </IonItem>
          </div>
        </div>
      </IonContent>

      <IonFooter class="ion-no-border">
        <IonToolbar className="addincome-footer-toolbar">
          <div className="ion-padding" onClick={() => setModalOpen(true)}>
            <IonButton expand="block">Save</IonButton>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Addincome;
