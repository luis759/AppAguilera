import {
  IonAvatar,
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
  IonProgressBar,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  chatbox,
  chatbubble,
  chatbubbleOutline,
  checkmarkCircle,
  heart,
  heartOutline,
  paperPlane,
  paperPlaneOutline,
} from "ionicons/icons";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Wallet.css";

const Wallet: React.FC = () => {
  const [showHide, setShowHide] = useState(true);
  const [activeSegment, setActiveSegment] = useState<string>("day");

  useEffect(() => {
    setActiveSegment("day");
  }, []);

  const segmentChanged = (e: any) => {
    console.log(activeSegment);
    setActiveSegment(e.detail.value);
  };

  const handleToggle = () => {
    setShowHide(!showHide);
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="wallet-toolbar">
          <IonTitle className="ion-text-left">
            Wallet{" "}
            <span>
              for <strong>Axess Platinum</strong> Card
            </span>
          </IonTitle>
          <IonButtons slot="end">
            <IonButton
              className="end-btn"
              routerLink="/login"
              routerDirection="none"
            >
              <IonIcon
                className="fav"
                src="assets/imgs/Addcard.svg"
                slot="end"
              />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="wallet">
        <div className="slider-holder animate__animated animate__fadeInRight">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={false}
            pagination={false}
            slidesPerView={1.2}
          >
            <SwiperSlide>
              <div className="slide-content ion-text-center ion-padding-horizontal">
                <div className="card" id="primary">
                  <div className="card-logo-holder ion-text-left">
                    <img src="assets/imgs/icn-mastercard.svg" alt="" />
                  </div>
                  <div className="card-number-holder">
                    <IonRow className="ion-no-padding">
                      <IonCol size="auto">
                        <p>1234</p>
                      </IonCol>
                      <IonCol size="auto">
                        <p>1234</p>
                      </IonCol>
                      <IonCol size="auto">
                        <p>1234</p>
                      </IonCol>
                      <IonCol size="auto">
                        <p>1234</p>
                      </IonCol>
                    </IonRow>
                  </div>
                  <div className="card-details">
                    <IonRow>
                      <IonCol size="8" class="card-holder ion-text-left">
                        <p>Ion-Wizard</p>
                      </IonCol>
                      <IonCol size="4" class="card-date ion-text-right">
                        <p>11/22</p>
                      </IonCol>
                    </IonRow>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content ion-text-center ion-padding-horizontal">
                <div className="card" id="gray">
                  <div className="card-logo-holder ion-text-left">
                    <img src="assets/imgs/icn-mastercard.svg" alt="" />
                  </div>
                  <div className="card-number-holder">
                    <IonRow className="ion-no-padding">
                      <IonCol size="auto">
                        <p>1234</p>
                      </IonCol>
                      <IonCol size="auto">
                        <p>1234</p>
                      </IonCol>
                      <IonCol size="auto">
                        <p>1234</p>
                      </IonCol>
                      <IonCol size="auto">
                        <p>1234</p>
                      </IonCol>
                    </IonRow>
                  </div>
                  <div className="card-details">
                    <IonRow>
                      <IonCol size="8" class="card-holder ion-text-left">
                        <p>Ion-Wizard</p>
                      </IonCol>
                      <IonCol size="4" class="card-date ion-text-right">
                        <p>11/22</p>
                      </IonCol>
                    </IonRow>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content ion-text-center ion-padding-horizontal">
                <div className="card" id="primary">
                  <div className="card-logo-holder ion-text-left">
                    <img src="assets/imgs/icn-mastercard.svg" alt="" />
                  </div>
                  <div className="card-number-holder">
                    <IonRow className="ion-no-padding">
                      <IonCol size="auto">
                        <p>1234</p>
                      </IonCol>
                      <IonCol size="auto">
                        <p>1234</p>
                      </IonCol>
                      <IonCol size="auto">
                        <p>1234</p>
                      </IonCol>
                      <IonCol size="auto">
                        <p>1234</p>
                      </IonCol>
                    </IonRow>
                  </div>
                  <div className="card-details">
                    <IonRow>
                      <IonCol size="8" class="card-holder ion-text-left">
                        <p>Ion-Wizard</p>
                      </IonCol>
                      <IonCol size="4" class="card-date ion-text-right">
                        <p>11/22</p>
                      </IonCol>
                    </IonRow>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="progress ion-padding">
          <IonRow>
            <IonCol class="ion-text-left">
              <IonLabel>Remaining Amount</IonLabel>
            </IonCol>
            <IonCol class="ion-text-right">
              <IonLabel>30%</IonLabel>
            </IonCol>
          </IonRow>
          <IonProgressBar value={0.25}></IonProgressBar>
        </div>

        <div className="statics">
          <IonRow>
            <IonCol className="ion-text-left">
              <IonItem lines="none">
                <div className="thumb" slot="start">
                  <img src="assets/imgs/Up1.svg" alt="" />
                </div>
                <IonLabel>
                  <p>Income</p>
                  <h3>$3,214</h3>
                </IonLabel>
              </IonItem>
            </IonCol>
            <IonCol text-left>
              <IonItem lines="none">
                <div className="thumb" slot="start">
                  <img src="assets/imgs/Down1.svg" alt="" />
                </div>
                <IonLabel>
                  <p>Expense</p>
                  <h3>$1,640</h3>
                </IonLabel>
              </IonItem>
            </IonCol>
          </IonRow>
        </div>

        <div className="send-money-holder animate__animated animate__fadeInRight animate__slow">
          <div className="the-title  ion-padding-horizontal">
            <h3>Send Money to</h3>
          </div>
          <div className="contact-holder  ion-padding-horizontal">
            <div className="recip-card ion-text-center">
              <div className="add-btn-holder">
                <img src="assets/imgs/plus.svg" alt="" />
              </div>
              <p className="ion-text-wrap">
                Add new <br /> contacts
              </p>
            </div>
            <div className="recip-card ion-text-center">
              <IonAvatar>
                <img src="assets/imgs/josie.png" alt="" />
              </IonAvatar>

              <p className="ion-text-wrap">
                Josie <br /> Maran
              </p>
            </div>
            <div className="recip-card ion-text-center">
              <IonAvatar>
                <img src="assets/imgs/josie.png" alt="" />
              </IonAvatar>

              <p className="ion-text-wrap">
                Josie <br /> Maran
              </p>
            </div>
            <div className="recip-card ion-text-center">
              <IonAvatar>
                <img src="assets/imgs/josie.png" alt="" />
              </IonAvatar>

              <p className="ion-text-wrap">
                Josie <br /> Maran
              </p>
            </div>
          </div>
        </div>

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

            <div className="list-holder animate__animated animate__fadeInUp ion-padding-horizontal">
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
      </IonContent>
    </IonPage>
  );
};

export default Wallet;
