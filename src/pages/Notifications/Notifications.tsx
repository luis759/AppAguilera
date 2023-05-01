import {
  IonAvatar,
  IonBackButton,
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
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./Notifications.css";

const Notifications: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="notifications-toolbar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="tabs"></IonBackButton>
          </IonButtons>
          <IonTitle className="ion-text-center">Notifications</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <img src="assets/imgs/icn-more.svg" alt="" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="notifications ion-padding">
        <div className="section animate__animated animate__fadeInUp">
          <div className="section-title">
            <h4>Today</h4>
          </div>
          <div className="the-list">
            <IonItem>
              <IonAvatar slot="start">
                <img src="assets/imgs/josie.png" alt="" />
              </IonAvatar>
              <IonLabel>
                <h5 className="ion-text-wrap">
                  You received a payment of{" "}
                  <span className="amount">$860.00</span> from{" "}
                  <span className="person">Josie Amanda</span>{" "}
                </h5>
                <p>09:20AM</p>
              </IonLabel>
            </IonItem>

            <IonItem>
              <IonAvatar slot="start">
                <img src="assets/imgs/yogie.png" alt="" />
              </IonAvatar>
              <IonLabel>
                <h5 className="ion-text-wrap">
                  {" "}
                  <span className="person">John Doe</span>Y requested a payment
                  of <span className="amount">$200.00</span>
                  from{" "}
                </h5>
                <p>08:00AM</p>
              </IonLabel>
              <div className="end-slot" slot="end">
                <IonButton>Pay</IonButton>
              </div>
            </IonItem>
          </div>
        </div>
        <div className="section animate__animated animate__fadeInUp">
          <div className="section-title">
            <h4>Yesterday</h4>
          </div>
          <div className="the-list">
            <IonItem>
              <IonAvatar slot="start">
                <img src="assets/imgs/josie.png" alt="" />
              </IonAvatar>
              <IonLabel>
                <h5 className="ion-text-wrap">
                  You received a payment of{" "}
                  <span className="amount">$860.00</span> from{" "}
                  <span className="person">Josie Amanda</span>{" "}
                </h5>
                <p>09:20AM</p>
              </IonLabel>
            </IonItem>
          </div>
        </div>
        <div className="section animate__animated animate__fadeInUp">
          <div className="section-title">
            <h4>This weekend</h4>
          </div>
          <div className="the-list">
            <IonItem>
              <IonAvatar slot="start">
                <img src="assets/imgs/yogie.png" alt="" />
              </IonAvatar>
              <IonLabel>
                <h5 className="ion-text-wrap">
                  {" "}
                  <span className="person">John Doe</span>Y requested a payment
                  of<span className="amount">$200.00</span>
                  from{" "}
                </h5>
                <p>08:00AM</p>
              </IonLabel>
              <div className="end-slot" slot="end">
                <IonButton>Pay</IonButton>
              </div>
            </IonItem>
            <IonItem>
              <IonAvatar slot="start">
                <img src="assets/imgs/josie.png" alt="" />
              </IonAvatar>
              <IonLabel>
                <h5 className="ion-text-wrap">
                  You received a payment of{" "}
                  <span className="amount">$860.00</span> from{" "}
                  <span className="person">Josie Amanda</span>{" "}
                </h5>
                <p>09:20AM</p>
              </IonLabel>
            </IonItem>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
