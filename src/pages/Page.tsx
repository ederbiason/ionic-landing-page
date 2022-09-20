import { IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { searchOutline, searchSharp, bagAddSharp, bagAddOutline } from 'ionicons/icons';
import { useParams } from 'react-router';
import LandingPage from '../components/LandingPage';
import './Page.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
          <IonButtons slot="end">
            <IonIcon ios={searchSharp} md={searchOutline}/>
            <IonIcon ios={bagAddSharp} md={bagAddOutline}/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen class="page">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <LandingPage />
      </IonContent>
    </IonPage>
  );
};

export default Page;
