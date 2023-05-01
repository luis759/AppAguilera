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
  IonModal,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  add,
  arrowForward,
  chevronForward,
  chevronForwardOutline,
} from "ionicons/icons";
import { useState } from "react";
import { RouteComponentProps } from "react-router";
import Successmodal from "../Modals/Successmodal/Successmodal";
import "./Reviewandsend.css";

interface OwnProps extends RouteComponentProps {}

const Reviewandsend: React.FC<OwnProps> = ({ history }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalClose = () => {
    history.push("/tabs");
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="request-review-toolbar">
          <IonButtons slot="start">
            <IonBackButton defaultHref="requestmoney"></IonBackButton>
          </IonButtons>
          <IonTitle className="ion-text-center">Review and Send</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="request-review">
        <IonModal
          isOpen={modalOpen}
          class="modaaal"
          className="modaaal"
          onDidDismiss={handleModalClose}
        >
          <Successmodal onClose={() => setModalOpen(false)} />
        </IonModal>
        <div className="review-holder ion-padding">
          <div className="review-card ion-text-center">
            <IonBadge color="primary" mode="ios">
              $20.00 USD
            </IonBadge>
            <IonItem lines="none" className="userItem">
              <IonAvatar slot="start">
                <img src="assets/imgs/josie.png" alt="" />
              </IonAvatar>
              <IonLabel>
                <h2 className="ion-text-wrap">Jessy Neila</h2>
                <p>jeessy@abc.com</p>
              </IonLabel>
            </IonItem>
            <IonItem className="input-holder">
              <div className="start-slot" slot="start">
                <IonButton>
                  <IonIcon slot="icon-only" icon={add} />
                </IonButton>
              </div>
              <IonInput type="text" placeholder="Add a note"></IonInput>
              <IonButton slot="end">
                <IonIcon icon={arrowForward} />
              </IonButton>
            </IonItem>
          </div>
        </div>

        <div className="details">
          <IonItem detail>
            <div className="thumb" slot="start">
              <img src="assets/imgs/visa.svg" alt="" />
            </div>
            <IonLabel>
              <h2>Visa</h2>
              <p>Debit ****1234</p>
            </IonLabel>
          </IonItem>
          <IonItem>
            <h5 slot="start">Amount in USD</h5>
            <h6 slot="end">$5.00 USD</h6>
          </IonItem>
          <IonItem>
            <h5 slot="start">Transaction fees</h5>
            <h6 slot="end">$0.00 USD</h6>
          </IonItem>
          <IonItem>
            <h5 slot="start">Payment Receved</h5>
            <h6 slot="end">In Seconds</h6>
          </IonItem>
        </div>
      </IonContent>

      <IonFooter className="ion-no-border">
        <IonToolbar className="request-review-footer-toolbar">
          <div className="ion-padding">
            <IonButton expand="block" onClick={() => setModalOpen(true)}>
              Send now&nbsp; <IonIcon slot="end" icon={chevronForwardOutline} />
            </IonButton>
          </div>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Reviewandsend;
