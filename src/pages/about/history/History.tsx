import styles from './History.module.scss';
import { useTranslation } from 'react-i18next';
import masOyamaImg from '#assets/Masutatsu_Oyama.webp';

const History = () => {
  const { t } = useTranslation();

  // TODO: i8n translate page
  return (
    <div className={styles.historyPage} data-testid="aboutHistoryPage">
      <section className={styles['text-container']}>
        <aside className={styles['images']} aria-label="Bilder av Mas Oyama">
          <figure className={styles.figure}>
            <img
              className={styles.image}
              src={masOyamaImg}
              alt="Masutatsu Oyama"
            />
            <figcaption>Masutatsu Oyama</figcaption>
          </figure>
        </aside>

        <article className={styles.article}>
          <h1>Historien om Kyokushin Karate (Shinkyokushin)</h1>

          <div className={styles.body}>
            <p>
              Grunnleggeren av Karate Kyokushinkai - Sosai Masutatsu Oyama - ble
              født 27. juli 1923 i en landsby i Sør-Korea. I en alder av 9 år,
              mens han bodde på søsterens gård i Mandjuriya, begynte han å trene
              kinesisk Kenpo, nærmere bestemt formen «The Eighteen Hands». I
              1938 dro Oyama til Japan med hensikt om å begynne på en flyskole
              for å bli jagerpilot, men han måtte gi opp drømmen. Han fortsatte
              å trene judo og bokse, og interessen for kampsport førte ham til
              Gichin Funakoshis dojo, hvor han begynte å trene Okinawa-karate.
            </p>

            <p>
              Oyama avanserte raskt takket være stor dedikasjon. Han var bare 20
              år da han oppnådde graden 4. dan. I samme periode vervet Oyama seg
              i den keiserlige japanske hæren og begynte å trene judo for å
              mestre grepsteknikkene. I løpet av fire år oppnådde han 4. dan i
              judo og avsluttet denne treningen.
            </p>

            <p>
              Etter Japans nederlag i andre verdenskrig falt Oyama, som mange
              unge japanere, inn i personlig fortvilelse. Han fant en vei ut av
              sin fortvilelse gjennom trening med So Nei Chu, en koreansk mester
              i Goju-Ryu karate. Denne store læreren, kjent både for kroppens
              styrke og sin dype spiritualitet, hadde stor innvirkning på den
              unge Mas Oyama. Mester So lærte ham BUDOs iboende vesen og
              buddhismens åndelige grunnlag. Etter noen år med trening rådet
              Mester So Mas Oyama til å avlegge et løfte om å vie livet til
              krigerens vei, og å trekke seg tilbake i fjellene for å trene sinn
              og kropp.
            </p>

            <p>
              I oktober 1946 begynte Oyama å trene i isolasjon på
              Minobu-fjellet. Bare to måneder senere ble han tvunget til å vende
              tilbake til sivilisasjonen på grunn av mangel på forsyninger.
            </p>

            <p>
              I september 1947 vant han overbevisende All-Japan Open Karate
              Championship. Dette var likevel ikke nok for ham, og i 1948 trakk
              Mas Oyama seg tilbake til Kiosumi-fjellet i Chiba-prefekturet. Han
              ble fulgt av en annen utøver - Yashiro. Vennen/sponsoren Mr.
              Kayama forsynte dem med mat hver måned. Gjennom hard trening lærte
              Mas Oyama å overvinne angsten forårsaket av ensomheten, men
              Yashiro maktet ikke dette. Etter seks måneder rømte han og
              etterlot Oyama alene. Atten måneder senere informerte Mr. Kayma
              Masutatsu Oyama om at han, på grunn av uventede omstendigheter,
              ikke lenger kunne støtte matforsyningene under Oymas isolasjon i
              fjellene. Som følge av dette ble Oymas opprinnelige plan om å
              forbli avskåret i tre år uforvarende avbrutt.
            </p>

            <p>
              Etter å ha returnert fra isolasjonen vant Oyama igjen All-Japan
              Open Karate Championship. Suksessen ble fulgt av mange seire i
              ulike kampsportmesterskap og turneringer med forskjellige regler.
              Mange ganger utfordret han mestre fra forskjellige kampsporter til
              kamp uten regler, men alle endte med en klar seier til Oyama. På
              denne måten praktiserte og perfeksjonerte han sin karate.
            </p>

            <p>
              Masutatsu Oyama åpnet sin første dojo i 1953 i Meijiro, Tokyo.
              Dette var tiden da Mas Oymas styrke var på sitt høyeste, og
              treningene i dojoen var nådeløse. Mange av hans elever var utøvere
              fra andre kampsporter, og Oyama sammenlignet deres stilarter og
              former med sin karate. Han adopterte de beste teknikkene og
              konseptene og innarbeidet dem i treningene sine. Slik la han
              grunnlaget for Kyokushin karate. Dannelsen av
              verdensorganisasjonen begynte i 1960, og den ble offisielt åpnet i
              juli 1965. Den fikk navnet International Karate Organization
              (IKO). Det var på denne tiden Oyama introduserte navnet på sin
              karatestil - Kyokushin (den ultimate sannhet) - og begynte å spre
              den over hele verden, og skapte en av de største
              kampsportorganisasjonene på planeten. På grunn av sitt bidrag til
              utviklingen av karate ble Oyama tildelt den ærefulle tittelen
              «Sosai».
            </p>

            <p>
              Kyokushin karate viste seg å være den hardeste og mest aggressive
              stilen i karate. Mange av disiplene ble mestre i kamper med ulike
              regelverk. Kyokushin-kjempere ble lagt merke til for eksepsjonell
              styrke og høy kampånd. Dette økte stilens autoritet og ga den
              anerkjennelse i kampsportmiljøene.
            </p>

            <p>
              Etter Sosai Oymas død i april 1994 dannet noen av hans elever sine
              egne organisasjoner med samme navn. Derfor ble det, etter et
              allmøte med filiallederne, nesten enstemmig besluttet at navnet
              skulle endres for å beskytte den unike identiteten.
              Organisasjonens navn ble endret til «World Karate Organization
              (WKO) - Shinkyokushinkai». Ordet «shin» ble lagt til ordet
              «kyokushinkai». «Shin» på japansk har to betydninger: «sannhet» og
              «ny». Slik kan betydningen av ordet «Shinkyokushinkai» oversettes
              som «Sann Kyokushinkai» og «Ny Kyokushinkai». «WKO-Kyokushinkai»
              forble tro mot kodene til Sosai Oyama, som var imot
              profesjonalisering og kommersialisering av organisasjonen.
              Hovedmålene består, nemlig utdanning av unge mennesker og
              internasjonal kommunikasjon og samarbeid. Organisasjonens
              kjennetegn ble symbolet «Kokoro» («Hjerte» på japansk), som
              symboliserer enheten mellom sinn, ferdigheter og fysisk styrke.
              Siden 2001 har organisasjonens president vært Kenji Midori -
              verdensmester fra det 5. verdensmesterskapet (1991), som også var
              den siste mesteren i det forente Kyokushin.
            </p>

            <p>
              I dag er «WKO - Shinkyokushin» den største verdensorganisasjonen
              innen fullkontakt karate, med 93 medlemsland. Dag for dag og år
              for år blir den mer og mer populær over hele verden. Det økende
              antallet unge som trener den, er en indikator på riktigheten av
              den valgte veien, arvet fra Sosaïs idéer.
            </p>

            <p>
              «WKO - Shinkyokushinkai» arbeider i tett samarbeid med den
              japanske olympiske komité for opptak og godkjenning av karate som
              olympisk sport. Dette forventes å bli virkelighet i 2020 når Japan
              vil være vert for de 32. olympiske sommerlekene.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default History;
