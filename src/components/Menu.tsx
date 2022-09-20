import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { chatboxSharp, chatboxOutline, imagesSharp, imageOutline, mailOutline, mailSharp, cartSharp, cartOutline, homeSharp, homeOutline} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'HOME',
    url: '/page/Home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'GALLERY',
    url: '/page/Gallery',
    iosIcon: imageOutline,
    mdIcon: imagesSharp
  },
  {
    title: 'SHOP',
    url: '/page/Shop',
    iosIcon: cartOutline,
    mdIcon: cartSharp
  },
  {
    title: 'REVIEW',
    url: '/page/Review',
    iosIcon: chatboxOutline,
    mdIcon: chatboxSharp
  },
  {
    title: 'CONTACT',
    url: '/page/Contact',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Menu</IonListHeader>
          <IonNote>ederbiason.eh@edu.unifil.br</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
