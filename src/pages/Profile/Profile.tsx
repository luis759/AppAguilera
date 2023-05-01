import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import "./Profile.css";

const Profile: React.FC = () => {
  const [showHide, setShowHide] = useState(true);

  const handleToggle = () => {
    setShowHide(!showHide);
  };

  return (
    <IonPage>
      <IonHeader className=" ion-no-border">
        <IonToolbar className="profile-toolbar">
          <IonTitle className="ion-text-center">Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="profile">
        <div className="background-holder"></div>
        <div className="top-card animate__animated animate__bounceIn ion-padding-horizontal ion-text-center">
          <div className="img-holder ion-text-center">
            <IonAvatar>
              <img src="assets/imgs/ion-wizard.png" alt="" />
            </IonAvatar>
            <div className="details">
              <h5>
                Ion Wizard
                <span>
                  {" "}
                  <img src="assets/imgs/verified.svg" alt="" />
                </span>{" "}
              </h5>
              <p>pdmproject2017wd1@gmail.com</p>
            </div>
            <div className="ion-padding-horiozntal">
              <div className="badge-holder">
                <div className="badge">
                  <img src="assets/imgs/badge1.svg" />
                </div>
                <div className="badge">
                  <img src="assets/imgs/badge2.svg" />
                </div>
                <div className="badge">
                  <img src="assets/imgs/badge3.svg" />
                </div>
                <div className="badge">
                  <img src="assets/imgs/badge4.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-section ion-padding-horizontal">
          <div className="general animate__animated animate__fadeInUp">
            <h5>GENERAL</h5>
            <div className="gen-list">
              <IonItem lines="none">
                <div className="thumb" slot="start">
                  <img src="assets/imgs/settings.svg" alt="" />
                </div>
                <IonLabel>
                  <h2>Profile Settings</h2>
                  <p>Update and modify your profile</p>
                </IonLabel>
              </IonItem>
              <IonItem lines="none">
                <div className="thumb" slot="start">
                  <img src="assets/imgs/icn-security.svg" alt="" />
                </div>
                <IonLabel>
                  <h2>Privacy</h2>
                  <p>Change your password</p>
                </IonLabel>
              </IonItem>
              <IonItem lines="none">
                <div className="thumb" slot="start">
                  <img src="assets/imgs/notification.svg" alt="" />
                </div>
                <IonLabel>
                  <h2>Notifications</h2>
                  <p>Change your notification settings</p>
                </IonLabel>
              </IonItem>
            </div>
          </div>

          <div className="chart animate__animated animate__fadeInUp">
            <h5>CHART</h5>
            <div className="chart-list">
              <IonItem lines="none">
                <div className="thumb" slot="start">
                  <img src="assets/imgs/chartsmall.svg" alt="" />
                </div>
                <IonLabel>
                  <h2>Show Volumes</h2>
                  <p>Edit graphics</p>
                </IonLabel>
              </IonItem>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
