import { IonButton, IonButtons, IonContent, IonFooter, IonIcon, IonInput, IonLabel, IonSlide, IonSlides, IonText, IonToolbar } from "@ionic/react"
import { rocketSharp, rocketOutline, cardSharp, cardOutline, swapHorizontalSharp, swapHorizontalOutline, bagCheckSharp, bagCheckOutline, logoInstagram, logoFacebook, logoTwitter, mailSharp, mailOutline } from "ionicons/icons"
import './LandingPage.css'

import jordanSneaker from '../assets/jordan-image.png'
import jordanSneaker2 from '../assets/jordan-image2.png'
import jordanSneaker3 from '../assets/jordan-image3.png'
import jordanSneaker4 from '../assets/jordan-image4.png'
import couro from '../assets/couro.png'
import sola from '../assets/sola.png'
import solado from '../assets/solado.png'
import mola from '../assets/mola.png'
import unifil from '../assets/unifil.png'

const slideOpts = {
    initialSlide: 0,
    speed: 400
};

const LandingPage: React.FC = () => {
    return (
        <IonContent>
            <IonText class="textTitle">
                Just Do It. <span className="spanNike">Nike</span>
            </IonText>
            <br />
            <div className="description">
                <IonText class="textDescription ion-margin-top">
                    A icônica linha de tênis do modelo Air Jordan 1, vem marcando história desde o seu lançamento em 1985 em parceria com o jogador de basquete Michael Jordan. Dessa vez o lançamento é um collab com o Paris Saint-Germain Football Club, unindo os mundos do basquete e futebol.
                </IonText>
            </div>
            <IonButtons>
                <IonButton>
                    Saiba Mais
                </IonButton>
            </IonButtons>

            <div className="image-card">
                <IonSlides pager={true} options={slideOpts}>
                    <IonSlide>
                        <img src={jordanSneaker} alt="imagem tenis" className="efeito1" />
                    </IonSlide>

                    <IonSlide>
                        <img src={jordanSneaker2} alt="imagem tenis" className="efeito2" />
                    </IonSlide>

                    <IonSlide>
                        <img src={jordanSneaker3} alt="imagem tenis" className="efeito3" />
                    </IonSlide>

                    <IonSlide>
                        <img src={jordanSneaker4} alt="imagem tenis" className="efeito4" />
                    </IonSlide>
                </IonSlides>

                <IonButton className="shopButton" color="tertiary">
                    Compre agora
                </IonButton>
            </div>

            <div className="shoeAbout">
                <IonText class="shoeTitle">
                    Descrição
                </IonText>

                <IonText class="shoeDescription">
                    O conforto do alto zoom <strong>Paris Saint-Germain x Air Jordan 1 'Paris'</strong> exibe pops de cores vibrantes em um esquema de cores neutro. A parte superior de camurça off-white é acentuada com sobreposições de nobuck preto e um acabamento iridescente reflexivo no Swoosh cortado. Uma mistura de tons fúcsia e violeta pousa na gola desconstruída e no logotipo clássico da Wings, junto com um emblema circular no calcanhar que reconhece o PSG, o clube de futebol profissional francês. O amortecimento leve chega através de uma entressola de espuma com amortecimento Zoom Air no calcanhar, ambos alojados em um suporte de borracha.
                </IonText>
            </div>

            <div className="shoeBenefits">
                <br />
                <IonText class="shoeBenefitsTitle">
                    Benefícios
                </IonText>
                <IonSlides options={slideOpts}>
                    <IonSlide class="shoeBenefitsSlides">
                        <img src={couro} alt="couro icon" className="benefits-img" />
                        <IonText>
                            Cabedal em couro branco com sobreposições em camurça preta para durabilidade e estilo.
                        </IonText>
                    </IonSlide>

                    <IonSlide class="shoeBenefitsSlides">
                        <img src={solado} alt="solado icon" className="benefits-img" />
                        <IonText>
                            Cupsole de borracha com unidade Air-Sole encapsulada no calcanhar para amortecimento leve.
                        </IonText>
                    </IonSlide>

                    <IonSlide class="shoeBenefitsSlides">
                        <img src={sola} alt="sola icon" className="benefits-img" />
                        <IonText>
                            Solado de borracha com ranhuras profundas e ponto de giro para tração e flexibilidade.
                        </IonText>
                    </IonSlide>

                    <IonSlide class="shoeBenefitsSlides">
                        <img src={mola} alt="mola icon" className="benefits-img" />
                        <IonText>
                            Amortecimento Zoom de alta qualidade com sistema Air para proporcionar conforto.
                        </IonText>
                    </IonSlide>
                </IonSlides>
            </div>

            <div className="benefits">
                <IonText class="benefits-title">Bônus</IonText>
                <IonSlides options={slideOpts}>
                    <IonSlide class="benefits-slider">
                        <IonIcon ios={rocketSharp} md={rocketOutline} />
                        <IonText>
                            Ganhe 10% de cash back, entrega grátis, retornos grátis e mais de 1000+ bons vareijistas!
                        </IonText>
                    </IonSlide>

                    <IonSlide class="benefits-slider">
                        <IonIcon ios={cardSharp} md={cardOutline} />
                        <IonText>
                            Pague com os melhores e mais seguros métodos de pagamento do mundo.
                        </IonText>
                    </IonSlide>

                    <IonSlide class="benefits-slider">
                        <IonIcon ios={swapHorizontalSharp} md={swapHorizontalOutline} />
                        <IonText>
                            100% de satisfação garantida ou pegue seu dinheiro de volta em 30 dias!
                        </IonText>
                    </IonSlide>

                    <IonSlide class="benefits-slider">
                        <IonIcon ios={bagCheckSharp} md={bagCheckOutline} />
                        <IonText>
                            Cartão para os outros 30% de suas compras a uma taxa de 1% em dinheiro de volta.
                        </IonText>
                    </IonSlide>
                </IonSlides>
            </div>

            
            <div className="order-section">
                <IonText class="order-title">Reserve já o seu</IonText>
                <div className="order">
                    <IonLabel>
                        <IonIcon ios={mailSharp} md={mailOutline} />
                    </IonLabel>
                    <IonInput type="email" placeholder="E-mail"></IonInput>
                </div>
            </div>

            <div className="socialMidia">
                <IonIcon src={logoInstagram} class="socialIcon" />
                <IonIcon src={logoTwitter} class="socialIcon" />
                <IonIcon src={logoFacebook} class="socialIcon" />
            </div>

            <div className="footer">
                <IonFooter>
                    <IonToolbar>
                        <img src={unifil} alt="unifil logo" /> <br />
                        <IonText class="footer-text" color="light">
                            © Feito por <span>Eder Biason</span>
                        </IonText> <br /><br />
                    </IonToolbar>
                </IonFooter>
            </div>
        </IonContent>
    )
}

export default LandingPage