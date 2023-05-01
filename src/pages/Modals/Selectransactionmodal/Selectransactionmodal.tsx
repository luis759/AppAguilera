import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonLabel,
  IonModal,
  IonPage,
  IonRow,
} from "@ionic/react";
import { useState } from "react";
import "./Selectransactionmodal.css";

const SelectransactionModal:React.FC<{onClose?: any }> = ({onClose}) => {
  return (
    <IonPage>
      <IonContent fullscreen className="modaaal">
        <IonGrid className="main-grid">
          <IonRow className="main-row ion-justify-content-center ion-align-items-center">
            <div className="the-holder ion-padding">
              <IonRow className="title-row">
                <IonCol size="8" class="ion-text-left">
                  <h4>Add Transaction</h4>
                </IonCol>
                <IonCol size="4" class="ion-text-right" onClick={() => {onClose()}}>
                  <p>Cancel</p>
                </IonCol>
              </IonRow>
              <div className="the-grid">
                <IonRow class="cat-row ion-text-center">
                  <IonCol size="6" className="cat-col">
                    <IonButton expand="block" routerLink={"/request"} className="animate__animated animate__bounceIn animate__delay-1s">
                      <IonLabel>
                        <img
                          src="assets/imgs/category-icons/request.svg"
                          alt=""
                        />
                        <p>Request</p>
                      </IonLabel>
                    </IonButton>
                  </IonCol>
                  <IonCol size="6" class="cat-col">
                    <IonButton routerLink={"/send"} className="animate__animated animate__bounceIn animate__delay-2s">
                      <IonLabel>
                        <img src="assets/imgs/category-icons/send.svg" alt="" />
                        <p>Send</p>
                      </IonLabel>
                    </IonButton>
                  </IonCol>
                </IonRow>
                <IonRow class="cat-row ion-text-center">
                  <IonCol size="6" class="cat-col">
                    <IonButton expand="block" routerLink={"/addincome"} className="animate__animated animate__bounceIn animate__delay-3s">
                      <IonLabel>
                        <img
                          src="assets/imgs/category-icons/addincome.svg"
                          alt=""
                        />
                        <p>Add Income</p>
                      </IonLabel>
                    </IonButton>
                  </IonCol>
                  <IonCol size="6" class="cat-col">
                    <IonButton className="animate__animated animate__bounceIn animate__delay-4s">
                      <IonLabel>
                        <img
                          src="assets/imgs/category-icons/addexpense.svg"
                          alt=""
                        />
                        <p>Add Expense</p>
                      </IonLabel>
                    </IonButton>
                  </IonCol>
                </IonRow>
              </div>
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SelectransactionModal;
