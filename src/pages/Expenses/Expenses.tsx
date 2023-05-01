import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

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

import { useState } from "react";
import "./Expenses.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Income",
      lineTension: 0.3,
      data: [300, 200, 350, 200, 400, 150, 300, 270, 350, 200, 300, 400],
      borderColor: "rgba(28,199,116,1)",
      pointBorderColor: "rgba(28,199,116,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(28,199,116,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      backgroundColor: "rgba(75,192,192,0.4)",
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      spanGaps: false,
    },
    {
      label: "Expense",
      lineTension: 0.3,
      data: [100, 150, 200, 120, 170, 250, 300, 100, 170, 220, 150, 100],
      backgroundColor: "rgba(242,71,80,0.4)",
      borderColor: "rgba(242,71,80,1)",
      pointBorderColor: "rgba(242,71,80,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 3,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(242,71,80,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      spanGaps: false,
    },
  ],
  options: {
    scales: {
      xAxes: [
        {
          ticks: {
            fontSize: 8,
            display: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontSize: 10,
            beginAtZero: true,
          },
          scaleLabel: {
            labelString: "US Dollars",
            display: true,
          },
        },
      ],
    },
    legend: {
      align: "start",
    },
  },
};

const Expenses: React.FC = () => {
  const [showHide, setShowHide] = useState(true);

  const handleToggle = () => {
    setShowHide(!showHide);
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="expenses-bar">
          <IonTitle className="ion-text-center">Expenses</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/login" routerDirection="none">
              <IonIcon
                className="fav"
                src="assets/imgs/Export.svg"
                slot="end"
              />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="expenses">
        <IonItem lines="none" class="top-item">
          <div className="start-slot">
            <p>Card Balance</p>
            <h1>$6,390</h1>
          </div>

          <div slot="end" className="end-slot">
            <div className="sm-section flex al-center jc-center">
              <img src="assets/imgs/Up.svg" alt="" />
              <p id="up">&nbsp;$3,214</p>
            </div>

            <div className="sm-section flex al-center jc-center">
              <img src="assets/imgs/Down.svg" alt="" />
              <p id="down">&nbsp;$1,168</p>
            </div>

            <p id="down"> </p>
          </div>
        </IonItem>

        <div className="chartWrapper ion-padding-vertical">
          <Line options={options} data={data} width={700} height={450} />
        </div>

        <div className="details animate__animated animate__fadeInUp ion-padding-horizontal">
          <h3 className="detail-title">Spending Breakdown</h3>

          <div className="the-list">
            <IonItem lines="none" class="list-item">
              <div className="thumb" slot="start">
                <img src="assets/imgs/shopping.svg" alt="" />
              </div>

              <IonLabel>
                <h4>Shopping</h4>
                <p>17 Monday June</p>
              </IonLabel>

              <div slot="end" className="end-slot">
                <h5>-$79</h5>
              </div>
            </IonItem>

            <IonItem lines="none" class="list-item">
              <div className="thumb" slot="start">
                <img src="assets/imgs/Gas.svg" alt="" />
              </div>

              <IonLabel>
                <h4>Shell</h4>
                <p>17 Monday June</p>
              </IonLabel>

              <div slot="end" className="end-slot">
                <h5>-$79</h5>
              </div>
            </IonItem>

            <IonItem lines="none" class="list-item">
              <div className="thumb" slot="start">
                <img src="assets/imgs/shopping.svg" alt="" />
              </div>

              <IonLabel>
                <h4>Shopping</h4>
                <p>17 Monday June</p>
              </IonLabel>

              <div slot="end" className="end-slot">
                <h5>-$79</h5>
              </div>
            </IonItem>

            <IonItem lines="none" class="list-item">
              <div className="thumb" slot="start">
                <img src="assets/imgs/Gas.svg" alt="" />
              </div>

              <IonLabel>
                <h4>Shell</h4>
                <p>17 Monday June</p>
              </IonLabel>

              <div slot="end" className="end-slot">
                <h5>-$79</h5>
              </div>
            </IonItem>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Expenses;
