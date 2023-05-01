import React, { useEffect, useState } from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonFab,
  IonFabButton,
  IonModal,
  IonContent,
} from "@ionic/react";
import { Route, Redirect } from "react-router";
import Home from "../Home/Home";
import Wallet from "../Wallet/Wallet";
import Expenses from "../Expenses/Expenses";
import Profile from "../Profile/Profile";
import UIContext from "../../my-context";
import SelectransactionModal from "../Modals/Selectransactionmodal/Selectransactionmodal";
interface MainTabsProps {}

const MainTabs: React.FC<MainTabsProps> = () => {
  const { setShowFab } = React.useContext(UIContext);
  
  useEffect(() => {
    setShowFab(true);

    return () => {
      setShowFab(false);
    };
  });

  const tabChanged = (e: any) => {
    console.log(e.detail.tab);
    // setSelectedTab(e.detail.tab);
  };

  return (
    <IonTabs onIonTabsDidChange={(e) => tabChanged(e)}>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/home" />
        {/*
          Using the render method prop cuts down the number of renders your components will have due to route changes.
          Use the component prop when your component depends on the RouterComponentProps passed in automatically.
        */}
        <Route path="/tabs/home" render={() => <Home />} exact={true} />
        <Route path="/tabs/expenses" render={() => <Expenses />} exact={true} />
        <Route path="/tabs/wallet" render={() => <Wallet />} exact={true} />
        <Route path="/tabs/profile" render={() => <Profile />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
       

        <IonTabButton tab="home" href="/tabs/home">
          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="expenses" href="/tabs/expenses">
          <IonLabel>Expenses</IonLabel>
        </IonTabButton>
        <IonTabButton>
          <IonLabel></IonLabel>
        </IonTabButton>
        <IonTabButton tab="wallet" href="/tabs/wallet">
          <IonLabel>Wallet</IonLabel>
        </IonTabButton>
        <IonTabButton tab="about" href="/tabs/profile">
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MainTabs;
