import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonPage,
  IonRippleEffect,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chatbox, heartOutline, notifications } from "ionicons/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SelectransactionModal from "../Modals/Selectransactionmodal/Selectransactionmodal";

import "./Home.css";

const Home: React.FC = () => {
  const percentage = 66;
  const spentvalue = 6390;
  const [activeSegment, setActiveSegment] = useState<string>("day");
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    setActiveSegment("day");
  }, []);

  const segmentChanged = (e: any) => {
    console.log(activeSegment);
    setActiveSegment(e.detail.value);
  };
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="home-toolbar">
          <IonTitle className="ion-text-center">Your Budgets</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/notifications">
              <IonIcon className="fav" icon={notifications} slot="end" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="home">
        <IonModal isOpen={modalOpen}>
          <SelectransactionModal />
        </IonModal>

        <div className="background-holder"></div>

        <div className="top-card animate__animated animate__bounceIn ion-padding-horizontal">
          <IonRow className="top-row">
            <IonCol size="7" className="ion-text-left">
              <p>
                for <strong> Axess Platinum</strong> Card
              </p>
            </IonCol>

            <IonCol size="5" className="ion-text-right">
              <IonButton fill="clear">Add Budget</IonButton>
            </IonCol>
          </IonRow>

          <div
            className="progressbar-holder"
            style={{ width: 200, height: 200, marginLeft: "15%" }}
          >
            <CircularProgressbarWithChildren
              value={percentage}
              text={"$" + `${spentvalue}`}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                strokeLinecap: "round",
                trailColor: "#DFE7F5",
                pathColor: "#0047CC",
                textColor: "#042C5C",
                textSize: "14px",
              })}
            >
              <img
                className="progress-image"
                src="assets/imgs/card.svg"
                alt="doge"
              />

              <div className="spent-holder">You Are Spent</div>

              <div className="bottom-detail">
                <p>
                  of<strong>&nbsp;&nbsp;$3,248</strong>
                </p>
              </div>
            </CircularProgressbarWithChildren>
          </div>

          <div className="precentage-row ion-padding-horizontal">
            <IonRow>
              <IonCol size="6" className="ion-text-left">
                <p>0%</p>
              </IonCol>

              <IonCol size="6" className="ion-text-right">
                <p>100%</p>
              </IonCol>
            </IonRow>
          </div>
        </div>

        <div className="bottom-section">
          <IonRow className="btns-holder">
            <IonCol size="6" className="ion-text-left">
              <IonButton expand="block" routerLink="/request">
               
                <img src="assets/imgs/sendd.svg" alt="" />
                &nbsp; Send Money
              </IonButton>
            </IonCol>

            <IonCol size="6" className="ion-text-left">
              <IonButton expand="block">
                <IonIcon src="assets/imgs/calculation.svg" slot="start" />
                &nbsp; Calculation
              </IonButton>
            </IonCol>
          </IonRow>

          <div className="details">
            <div className="the-title ion-padding-horizontal">
              <h3>Transactions</h3>
            </div>

            <div className="segment-holder">
              <IonSegment
                onIonChange={(e) => segmentChanged(e)}
                value={activeSegment as any}
              >
                <IonSegmentButton value={"day"}>
                  <IonLabel>Day</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value={"week"}>
                  <IonLabel>Week</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value={"month"}>
                  <IonLabel>Month</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value={"year"}>
                  <IonLabel>Year</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </div>

            <div className="list-holder ion-padding-horizontal animate__animated animate__fadeInUp">
              {activeSegment === "day" ? (
                <div className="the-list">
                  <IonItem lines="none">
                    <div className="start-slot" slot="start">
                      <img src="assets/imgs/Gas.svg" alt="" />
                    </div>
                    <IonLabel>
                      <h4>Shell</h4>
                      <p>17 Monday June</p>
                    </IonLabel>
                    <div className="end-slot" slot="end">
                      <h5>-$35.88</h5>
                    </div>
                  </IonItem>

                  <IonItem lines="none">
                    <div className="start-slot" slot="start">
                      <img src="assets/imgs/shopping.svg" alt="" />
                    </div>
                    <IonLabel>
                      <h4>Amazon</h4>
                      <p>17 Monday June</p>
                    </IonLabel>
                    <div className="end-slot" slot="end">
                      <h5>- $79,90</h5>
                    </div>
                  </IonItem>

                  <IonItem lines="none">
                    <div className="start-slot" slot="start">
                      <img src="assets/imgs/bill.svg" alt="" />
                    </div>
                    <IonLabel>
                      <h4>Vodafone</h4>
                      <p>17 Monday June</p>
                    </IonLabel>
                    <div className="end-slot" slot="end">
                      <h5>- $34,21</h5>
                    </div>
                  </IonItem>
                </div>
              ) : (
                <div></div>
              )}

              {activeSegment === "week" ? (
                <div className="the-list">
                  <IonItem lines="none">
                    <div className="start-slot" slot="start">
                      <img src="assets/imgs/Gas.svg" alt="" />
                    </div>
                    <IonLabel>
                      <h4>Shellsddsdd</h4>
                      <p>17 Monday June</p>
                    </IonLabel>
                    <div className="end-slot" slot="end">
                      <h5>-$35</h5>
                    </div>
                  </IonItem>
                </div>
              ) : (
                <div></div>
              )}

              {activeSegment === "month" ? (
                <div className="the-list">
                  <IonItem lines="none">
                    <div className="start-slot" slot="start">
                      <img src="assets/imgs/Gas.svg" alt="" />
                    </div>
                    <IonLabel>
                      <h4>Shellmonth</h4>
                      <p>17 Monday June</p>
                    </IonLabel>
                    <div className="end-slot" slot="end">
                      <h5>-$35</h5>
                    </div>
                  </IonItem>
                </div>
              ) : (
                <div></div>
              )}

              {activeSegment === "year" ? (
                <div className="the-list">
                  <IonItem lines="none">
                    <div className="start-slot" slot="start">
                      <img src="assets/imgs/Gas.svg" alt="" />
                    </div>
                    <IonLabel>
                      <h4>Shellmonth</h4>
                      <p>17 Monday June</p>
                    </IonLabel>
                    <div className="end-slot" slot="end">
                      <h5>-$35</h5>
                    </div>
                  </IonItem>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
