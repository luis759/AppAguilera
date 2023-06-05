import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react";
import { Swiper, SwiperSlide } from 'swiper/react';


import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from "swiper";

import "./Intro.css";

import "@ionic/react/css/ionic-swiper.css";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Intro: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding intro" fullscreen>
        <div style={{height:"100%",width:"100%"}}>
          <img src="assets/imgs/index.jpg"  style={{height:"100%",width:"100%"}}/>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Intro;
