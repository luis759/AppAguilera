import {
  IonAvatar,
  IonBackButton,
  IonBadge,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowRedo, home, share } from "ionicons/icons";
import { useState } from "react";
import "./Send.css";

const Send: React.FC = () => {


  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="tabs"></IonBackButton>
          </IonButtons>
          <IonTitle className="ion-text-center">Send Money</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="requestt">
        <div className="search-holder">
          <IonSearchbar
            placeholder="Enter a name or email"
            mode="ios"
          ></IonSearchbar>
        </div>

        <IonItem lines="none" className="top-title-item">
          <div className="start-slot" slot="start">
            <IonButton>
              <IonIcon icon={arrowRedo} />
            </IonButton>
          </div>
          <IonLabel>Share your custom link to get paid</IonLabel>
          <div className="end-slot" slot="end">
            <IonBadge color="primary" mode="md">
              New
            </IonBadge>
          </div>
        </IonItem>

        <div className="the-list animate__animated animate__fadeInUp">
          <IonItem routerLink="/sendmoney">
            <IonAvatar slot="start">
              <img src="assets/imgs/yogie.png" alt="" />
            </IonAvatar>
            <IonLabel>
              <h3 className="ion-text-wrap">John Doe</h3>
              <p>johndoe@nexgen.com</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/sendmoney">
            <IonAvatar slot="start">
              <img src="assets/imgs/josie.png" alt="" />
            </IonAvatar>
            <IonLabel>
              <h3 className="ion-text-wrap">Jessy Neila</h3>
              <p>jeessy@abc.com</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/sendmoney">
            <IonAvatar slot="start">
              <img src="assets/imgs/yogie.png" alt="" />
            </IonAvatar>
            <IonLabel>
              <h3 className="ion-text-wrap">John Doe</h3>
              <p>johndoe@nexgen.com</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/sendmoney">
            <IonAvatar slot="start">
              <img src="assets/imgs/josie.png" alt="" />
            </IonAvatar>
            <IonLabel>
              <h3 className="ion-text-wrap">Jessy Neila</h3>
              <p>jeessy@abc.com</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/sendmoney">
            <IonAvatar slot="start">
              <img src="assets/imgs/yogie.png" alt="" />
            </IonAvatar>
            <IonLabel>
              <h3 className="ion-text-wrap">John Doe</h3>
              <p>johndoe@nexgen.com</p>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/sendmoney">
            <IonAvatar slot="start">
              <img src="assets/imgs/josie.png" alt="" />
            </IonAvatar>
            <IonLabel>
              <h3 className="ion-text-wrap">Jessy Neila</h3>
              <p>jeessy@abc.com</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src="assets/imgs/yogie.png" alt="" />
            </IonAvatar>
            <IonLabel>
              <h3 className="ion-text-wrap">John Doe</h3>
              <p>johndoe@nexgen.com</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start">
              <img src="assets/imgs/josie.png" alt="" />
            </IonAvatar>
            <IonLabel>
              <h3 className="ion-text-wrap">Jessy Neila</h3>
              <p>jeessy@abc.com</p>
            </IonLabel>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Send;
